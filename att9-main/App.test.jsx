import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('renderiza a aplicação completa sem falhar', () => {
    render(<App />);
    
    // Testa se elementos mínimos de cada section principal estão na tela ao mesmo tempo
    expect(screen.getByRole('heading', { level: 1, name: /oliveira & mendes advocacia/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /defesa jurídica estratégica/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /áreas de atuação/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /sobre o escritório/i })).toBeInTheDocument();
  });
});
