import { render, screen } from '@testing-library/react';
import CardArea from '../components/CardArea';

describe('CardArea', () => {
  it('renderiza títulos e descrições corretamente', () => {
    render(<CardArea titulo="Título de Teste" descricao="Descrição de teste" />);
    expect(screen.getByRole('heading', { level: 3, name: /título de teste/i })).toBeInTheDocument();
    expect(screen.getByText(/descrição de teste/i)).toBeInTheDocument();
  });
});
