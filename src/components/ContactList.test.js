import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import ContactList from './ContactList';
import store from '../store';

test('renders contact list', () => {
  const { getByText } = render(
    <Provider store={store}>
      <ContactList />
    </Provider>
  );
  const headingElement = getByText(/Contact List/i);
  expect(headingElement).toBeInTheDocument();
});
