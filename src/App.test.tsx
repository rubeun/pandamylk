import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PandaMylk header text', () => {
  render(<App />);
  const headerText = screen.getByText(/pandamylk/i);
  expect(headerText).toBeInTheDocument();
});
