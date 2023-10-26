import React from 'react';

function ErrorMessage({ message }) {
    return (
        <div data-testid="error-message" style={{ color: 'red' }}>
            {message}
        </div>
    );
}

export default ErrorMessage;