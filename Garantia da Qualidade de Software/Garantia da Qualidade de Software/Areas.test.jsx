import { render, screen } from '@testing-library/react';
import Areas from '../sections/Areas';

describe('Areas Section', () => {
  it('renderiza o título da seção e os cards de atuação', () => {
    render(<Areas />);
    expect(screen.getByRole('heading', { level: 2, name: /áreas de atuação/i })).toBeInTheDocument();
    
    // Testa ocorrência dos cards específicos
    expect(screen.getByRole('heading', { level: 3, name: /direito civil/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /direito trabalhista/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /direito empresarial/i })).toBeInTheDocument();
  });
});
