import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './Header';
import '@testing-library/jest-dom';

describe('Header Component', () => {
  it('renders all navigation links correctly', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const loginLink = screen.getByText('Login');
    const registerLink = screen.getByText('Register');

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(loginLink).toBeInTheDocument();
    expect(registerLink).toBeInTheDocument();
  });

  it('applies active style to the correct link', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const loginLink = screen.getByText('Login');
    const registerLink = screen.getByText('Register');

    expect(homeLink).toHaveStyle('color: red');
    expect(aboutLink).toHaveStyle('color: blue');
    expect(loginLink).toHaveStyle('color: blue');
    expect(registerLink).toHaveStyle('color: blue');
  });
});
