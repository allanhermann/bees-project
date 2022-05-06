import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/router";
import { Login } from "./login";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("LoginPage", () => {
  it("Test that the texts are shown correctly", () => {
    render(<Login />);

    expect(
      screen.getByText("Please, enter your full name below")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Only alphabetical characters are accepted")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Are you older than 18 years old?")
    ).toBeInTheDocument();
    expect(screen.getByText("Enter")).toBeInTheDocument();
  });

  it("Test that the button is disabled when only the checkbox is filled", () => {
    render(<Login />);

    const checkBox = screen.getByRole("checkbox");
    const button = screen.getByRole("button");

    fireEvent.click(checkBox);

    expect(button).toHaveAttribute("disabled");
  });

  it("Test that the button is disabled when only the textbox is filled", () => {
    render(<Login />);

    const textBox = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    fireEvent.change(textBox, { target: { value: "Test" } });

    expect(button).toHaveAttribute("disabled");
  });

  it("Test that the button is enabled when the checkbox and textbox are filled", () => {
    render(<Login />);

    const textBox = screen.getByRole("textbox");
    const checkBox = screen.getByRole("checkbox");
    const button = screen.getByRole("button");

    fireEvent.change(textBox, { target: { value: "Test" } });
    fireEvent.click(checkBox);

    expect(button).not.toHaveAttribute("disabled");
  });
  it("Test that the button is redirecting to the correct page", () => {
    const push = jest.fn();
    (useRouter as jest.Mock).mockImplementation(() => ({
      push,
    }));

    render(<Login />);

    const textBox = screen.getByRole("textbox");
    const checkBox = screen.getByRole("checkbox");
    const button = screen.getByRole("button");

    fireEvent.change(textBox, { target: { value: "Test" } });
    fireEvent.click(checkBox);
    fireEvent.click(button);

    expect(push).toHaveBeenCalledWith("/dashboard");
  });
});
