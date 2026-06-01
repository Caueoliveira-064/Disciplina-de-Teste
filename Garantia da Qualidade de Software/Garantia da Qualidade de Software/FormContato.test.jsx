import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormContato from '../components/FormContato';

describe('FormContato', () => {
  it('Teste de formulario: deve renderizar todos os campos', () => {
    render(<FormContato />);
    
    expect(screen.getByLabelText(/nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensagem/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enviar mensagem/i })).toBeInTheDocument();
  });

  it('Teste de estado e interacao: deve permitir digitar nos campos', async () => {
    const user = userEvent.setup();
    render(<FormContato />);
    
    const inputNome = screen.getByLabelText(/nome/i);
    const inputEmail = screen.getByLabelText(/e-mail/i);
    const inputMensagem = screen.getByLabelText(/mensagem/i);

    await user.type(inputNome, 'João Silva');
    await user.type(inputEmail, 'joao@email.com');
    await user.type(inputMensagem, 'Olá, gostaria de um orçamento.');

    // Verifica se o estado controlou o valor corretamente
    expect(inputNome).toHaveValue('João Silva');
    expect(inputEmail).toHaveValue('joao@email.com');
    expect(inputMensagem).toHaveValue('Olá, gostaria de um orçamento.');
  });

  it('Teste de validacao: deve exibir mensagem de erro se faltarem campos', async () => {
    const user = userEvent.setup();
    render(<FormContato />);
    
    const botaoEnviar = screen.getByRole('button', { name: /enviar mensagem/i });
    
    // Tenta enviar com form vazio
    await user.click(botaoEnviar);
    
    expect(screen.getByRole('alert')).toHaveTextContent(/por favor, preencha todos os campos/i);
  });

  it('Teste de validacao: deve exibir sucesso ao enviar dados válidos', async () => {
    const user = userEvent.setup();
    render(<FormContato />);
    
    const inputNome = screen.getByLabelText(/nome/i);
    const inputEmail = screen.getByLabelText(/e-mail/i);
    const inputMensagem = screen.getByLabelText(/mensagem/i);
    const botaoEnviar = screen.getByRole('button', { name: /enviar mensagem/i });

    await user.type(inputNome, 'Maria Oliveira');
    await user.type(inputEmail, 'maria@email.com');
    await user.type(inputMensagem, 'Gostaria de agendar uma consulta.');
    
    await user.click(botaoEnviar);
    
    expect(screen.getByRole('status')).toHaveTextContent(/mensagem enviada com sucesso/i);
  });
});
