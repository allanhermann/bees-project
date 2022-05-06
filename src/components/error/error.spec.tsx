import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Error } from "./error";

describe("Error Page", () => {
  it("Test that the link has the correct redirect page", () => {
    render(<Error />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/login");
    expect(link).toHaveTextContent("Click here");
  });

  it("Test that the texts are shown correctly", () => {
    render(<Error />);

    expect(screen.getByText("Something went wrong :(")).toBeInTheDocument();
    expect(screen.getByText("Click here")).toBeInTheDocument();
    expect(
      screen.getByText("to go back to the login page")
    ).toBeInTheDocument();
  });
});
