import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import axios from "axios";
import MockAdapter from "axios-mock-adapter"
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';

const mock = new MockAdapter(axios);
mock.onGet().reply(200, []);

test('renders learn react link', async () => {
  render(<App />);
  const spinningLogo = screen.getByAltText(/spinning loader indicator/i);
  expect(spinningLogo).toBeInTheDocument();
  await waitForElementToBeRemoved(() => screen.getByAltText(/spinning loader indicator/i));
});
