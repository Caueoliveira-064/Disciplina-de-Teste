import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

describe('Button', () => {
  it('renderiza o botão com o texto informad', () => {
    render(<Button text="Clique Aqui" />);
    expect(screen.getByRole('button', { name: /clique aqui/i })).toBeInTheDocument();
  });
});
