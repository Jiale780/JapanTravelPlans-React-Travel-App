import React from 'react';
import { render } from '@testing-library/react';
import WebAppRouter from './WebAppRouter';

test('renders learn react link', () => {
  const { getByText } = render(<WebAppRouter />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
