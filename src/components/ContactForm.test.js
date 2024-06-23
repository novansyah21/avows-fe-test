import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import ContactForm from './ContactForm';
import store from '../middleware/store';

test('submitting form adds contact', () => {
  const { getByPlaceholderText, getByText } = render(
    <Provider store={store}>
      <ContactForm />
    </Provider>
  );

  fireEvent.change(getByPlaceholderText('Name'), { target: { value: 'John Doe' } });
  fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'john@example.com' } });
  fireEvent.click(getByText('Add Contact'));

  // Add assertions to check if contact is added
});
