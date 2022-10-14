import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';

import ContactUsForm from '.';

describe('Contact us from', () => {
  it('renders fields (subject,name,email,message)', () => {
    const { getByRole } = render(<ContactUsForm />);
    const inputsSelect = getByRole('combobox', { name: 'select_subject' });
    const nameInput = getByRole('textbox', { name: 'name' });
    const sendButton = getByRole('button', { name: /send/i });
    const emailInput = getByRole('textbox', { name: 'email' });
    const messageInput = getByRole('textbox', { name: 'message' });
    expect(nameInput).toBeInTheDocument();
    expect(sendButton).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(inputsSelect).toBeInTheDocument();
  });
  it('form should have the values', () => {
    const mockedFormFields = {
      name: 'ahmed elsayed',
      email: 'myemeail@sds.co',
      message: 'message',
      subject: 'first',
    };
    const { getByRole } = render(<ContactUsForm />);
    const inputsSelect = getByRole('combobox', { name: 'select_subject' });
    const nameInput = getByRole('textbox', { name: 'name' });
    const emailInput = getByRole('textbox', { name: 'email' });
    const messageInput = getByRole('textbox', { name: 'message' });
    const contactForm = getByRole('form');
    act(() => {
      fireEvent.change(nameInput, { target: { value: mockedFormFields.name } });
      fireEvent.change(emailInput, {
        target: { value: mockedFormFields.email },
      });
      fireEvent.change(messageInput, {
        target: { value: mockedFormFields.message },
      });
      fireEvent.change(inputsSelect, { target: { value: 'first' } });
    });
    expect(contactForm).toHaveFormValues({
      ...mockedFormFields,
    });
  });
});
