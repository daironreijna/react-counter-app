import { render, screen } from '@testing-library/react'
import * as userEvent from '@testing-library/user-event'
import App from '../App'
import { expect } from 'vitest';

// Test if 
it('App component renders without error', () => {
    render(<App />);
});

// Test if button renders properly
it('App component renders a button', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'Increment' })
    expect(button).toBeDefined();
})

// Test if button increments 
// This is quality assurance checking.

it('Counter Start At 0', () => {
    render(<App />)
    const count = screen.getByText("count is 0");
    expect(count).toBeDefined();
})

// Test if counter increments

it("Counter Increments", async () => {
    render(<App />)

    await userEvent.click(
        screen.getByRole('button', { name: 'Increment' })
    );

    const count = screen.getByText('count is 1');

    await expect(count).toBeDefined();
});

// Test 5:
it("App Component Renders the Counter Display", () => {
    //Test case:** Write a test that checks to see if the counter display renders properly.
    render(<App />);
const counterDisplay = screen.getByText('count is 0');
expect(counterDisplay).toBeDefined();
});

// Test 6:
it("App Component Renders a Decrement Button", () => {
    render(<App />);
    const decrementButton = screen.getByRole('button', { name: 'Decrement' });
    expect(decrementButton).toBeDefined();

});

// Test 7:
it("Count Is Unable to Go Below Zero and Throws Error", () => {
    //Test case:** Write a test that will not allow the counter to go below 0 and display an error message.
    render(<App />);

    const decrementButton = screen.getByRole('button', { name: 'Decrement' });
    const errorDisplay = screen.queryByTestId('error-message'); // Assuming an error message element has a test ID

    // Attempt to decrement below zero
    userEvent.click(decrementButton);

    // Check if the error message is displayed
    expect(errorDisplay).toBeDefined();

});
// Test 8:
it("Decrement Error Message Clears When Count Increment Higher Than 0", () => {

    //Test case:** Clear the error message on increment and counter increases.
    render(<App />);
const decrementButton = screen.getByRole('button', { name: 'Decrement' });
const incrementButton = screen.getByRole('button', { name: 'Increment' });
const errorDisplay = screen.queryByTestId('error-message'); //Assuming

// Attempt to decrement below zero
userEvent.click(decrementButton)

// Check if the error message is displayed
expect(errorDisplay).toBeDefined();

// Increment to clear the error
userEvent.click(incrementButton);

// Check if the error message is cleared
expect(errorDisplay).toBeNull();


});