import { render, screen } from '@testing-library/react';
import Sobre from '../sections/Sobre';

describe('Sobre Section', () => {
  it('renderiza corretamente os títulos e destaques da seção', () => {
    render(<Sobre />);
    expect(screen.getByRole('heading', { level: 2, name: /sobre o escritório/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /\+10 anos/i })).toBeInTheDocument();
    expect(screen.getByText(/de experiência jurídica/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /atendimento/i })).toBeInTheDocument();
    expect(screen.getByText(/personalizado e estratégico/i)).toBeInTheDocument();
  });
});
