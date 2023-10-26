import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorMessage from '..ErrorMessage';

test('Error Message Component renders with a message', () => {
    const errorMessage = 'This is an error message';
    render(<ErrorMessage message={errorMessage} />);
    const errorMessageElement = screen.getByTestId('error-message');
    expect(errorMessageElement).toHaveTextContent(errorMessage);
});