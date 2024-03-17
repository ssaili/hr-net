import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "./index";
import userEvent from "@testing-library/user-event";

describe("Input component", () => {
  it("should render the input component with the correct label", () => {
    const label = "Username";
    render(<Input label={label} />);
    const inputElement = screen.getByLabelText(label);
    expect(inputElement).toBeInTheDocument();
  });

  it("should render the input component with the correct type", () => {
    const type = "text";
    render(<Input type={type} />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("should display the correct error message for invalid input", () => {
    const regularExpression = /^[a-zA-Z\s]*$/;
    render(<Input regularExpression={regularExpression} />);
    const inputElement = screen.getByRole("textbox");
    userEvent.type(inputElement, "123");
    const errorMessage = screen.getByText("This character is not allowed.");
    expect(errorMessage).toBeInTheDocument();
  });
});
