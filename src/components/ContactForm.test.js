import React from 'react';
import ContactForm from './ContactForm';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test("render this component", () => {
    render(< ContactForm />);
})

// Act
test("select each label in the form", () => {
    // Arrange
    render(< ContactForm />)

    // Act - query for each input field

    const firstNameInput = screen.getByLabelText(/first Name/i);

    const lastNameInput = screen.getByLabelText(/last name/i);

    const emailInput = screen.getByLabelText(/email/i);

    const messageInput = screen.getByLabelText(/message/i);

    const button = screen.getByRole("button", {name: /submit/i});

// Fill out the form/add text to the fields (use labelText and userEvent)

    userEvent.type(firstNameInput, "Rezaur");
    userEvent.type(lastName, "Rahman");
    userEvent.type(messageInput, "Lambda is hope");

    // click the button

    userEvent.click(button);


})