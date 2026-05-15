import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import Login from '../pages/Login';
import axios from 'axios';

vi.mock('axios');

// Mock para testar navegação entre telas
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const renderWithRouter = (ui) => {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
};

describe('Tela de Login', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  // --- TESTES DE CENÁRIOS (Lógicos/Funcionais) ---
  describe('Cenários de Testes', () => {
    test('1. Sucesso na Autenticação', async () => {
      axios.post.mockResolvedValueOnce({
        data: { token: 'fake-token', user: { id: 1, name: 'User' } }
      });

      renderWithRouter(<Login />);
      
      fireEvent.change(screen.getByPlaceholderText(/e-mail/i), { target: { value: 'teste@teste.com' } });
      fireEvent.change(screen.getByPlaceholderText(/senha/i), { target: { value: 'senha123' } });
      fireEvent.submit(screen.getByRole('button', { name: /acessar/i }).closest('form'));

      await waitFor(() => {
        expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/api/auth/login', {
          email: 'teste@teste.com',
          password: 'senha123'
        });
        expect(localStorage.getItem('token')).toBe('fake-token');
      });
    });

    test('2. Tratamento de Erro', async () => {
      axios.post.mockRejectedValueOnce({
        response: { data: { message: 'Senha incorreta' } }
      });
      window.alert = vi.fn();

      renderWithRouter(<Login />);
      
      fireEvent.change(screen.getByPlaceholderText(/e-mail/i), { target: { value: 'errado@teste.com' } });
      fireEvent.change(screen.getByPlaceholderText(/senha/i), { target: { value: 'senhaerrada' } });
      fireEvent.submit(screen.getByRole('button', { name: /acessar/i }).closest('form'));

      await waitFor(() => {
        expect(window.alert).toHaveBeenCalledWith('Senha incorreta');
      });
    });

    test('3. Validação de Campos', () => {
      renderWithRouter(<Login />);
      expect(screen.getByPlaceholderText(/e-mail/i)).toBeRequired();
      expect(screen.getByPlaceholderText(/senha/i)).toBeRequired();
    });
  });

  // --- TESTES ESTRUTURAIS ---
  describe('Testes Estruturais', () => {
    test('1. Renderização da Tela (Interface)', () => {
      renderWithRouter(<Login />);
      
      // Botão de login
      expect(screen.getByRole('button', { name: /acessar/i })).toBeInTheDocument();
      // Campos de entrada
      expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument();
      // Textos informativos
      expect(screen.getByText(/ENTRAR/i)).toBeInTheDocument();
      expect(screen.getByText(/Não tem conta\?/i)).toBeInTheDocument();
    });

    test('2. Interação do Usuário (Eventos e Navegação)', async () => {
      axios.post.mockResolvedValueOnce({ data: { token: '123' } });
      renderWithRouter(<Login />);
      
      // Preenchimento de inputs
      const emailInput = screen.getByPlaceholderText(/e-mail/i);
      fireEvent.change(emailInput, { target: { value: 'user@teste.com' } });
      expect(emailInput.value).toBe('user@teste.com');

      // Clique em botão
      fireEvent.change(screen.getByPlaceholderText(/senha/i), { target: { value: '123' } });
      fireEvent.submit(screen.getByRole('button', { name: /acessar/i }).closest('form'));

      // Navegação entre telas
      await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalledWith('/scheduling');
      });
    });

    test('3. Estados da Aplicação (Mensagens de erro)', async () => {
      axios.post.mockRejectedValueOnce({ response: { data: { message: 'Erro ao entrar' } } });
      window.alert = vi.fn();
      
      renderWithRouter(<Login />);
      fireEvent.change(screen.getByPlaceholderText(/e-mail/i), { target: { value: 'user@teste.com' } });
      fireEvent.change(screen.getByPlaceholderText(/senha/i), { target: { value: '123' } });
      fireEvent.submit(screen.getByRole('button', { name: /acessar/i }).closest('form'));

      // Exibição de estado de erro
      await waitFor(() => {
        expect(window.alert).toHaveBeenCalledWith('Erro ao entrar');
      });
    });
  });
});
