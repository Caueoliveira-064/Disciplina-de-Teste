import { render, screen } from '@testing-library/react';
import Hero from '../sections/Hero';

describe('Hero Section', () => {
  it('renderiza texto de destaque e botão', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 2, name: /defesa jurídica estratégica/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /agendar consulta/i })).toBeInTheDocument();
    expect(screen.getByText(/atuamos com compromisso/i)).toBeInTheDocument();
  });
});
