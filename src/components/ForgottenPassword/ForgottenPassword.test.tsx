import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";
import ForgottenPasswordContainer from "./ForgottenPassword.container.";
import { forgottenPasswordRequest } from "@/@core/infraestructure/session.service";

jest.mock("../../@core/infraestructure/session.service", () => ({
  forgottenPasswordRequest: jest.fn(),
}));

describe("Forgotten Password Container", () => {
  beforeEach(() => {
    render(<ForgottenPasswordContainer />);
    jest.clearAllMocks();
  });

  test("should render email input and submit button", () => {
    const emailInput = screen.getByLabelText(/e-mail/i);
    const submitButton = screen.getByText(/reset password/i);
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  describe("Submit Button State", () => {
    test("should be disabled if the input value is empty", async () => {
      const submitButton = screen.getByText(/reset password/i);
      const emailInput = screen.getByLabelText(/e-mail/i);
      fireEvent.change(emailInput, { target: { value: "" } });
      await waitFor(() => {
        expect(submitButton).toBeDisabled();
      });
    });

    test("should be disabled if the input value is invalid", async () => {
      const submitButton = screen.getByText(/reset password/i);
      const emailInput = screen.getByLabelText(/e-mail/i);
      fireEvent.change(emailInput, { target: { value: "random" } });
      await waitFor(() => {
        expect(submitButton).toBeDisabled();
      });
    });

    test("should be active when e-mail is valid", async () => {
      await act(async () => {
        const emailInput = screen.getByLabelText(/e-mail/i);
        fireEvent.change(emailInput, { target: { value: "random@mail.com" } });
        fireEvent.blur(emailInput);
        const emailInvalidError = screen.queryByText(/must be a valid email/i);
        expect(emailInvalidError).toBeNull();
      });
    });
  });

  describe("Email Validation Messages", () => {
    test("should show 'E-mail is required' when email is empty", async () => {
      const emailInput = screen.getByLabelText(/e-mail/i);
      fireEvent.blur(emailInput);
      const emailError = await screen.findByText(/E-mail is required/i);
      expect(emailError).toBeInTheDocument();
    });

    test("should show 'Must be a valid email' when email is invalid", async () => {
      const emailInput = screen.getByLabelText(/e-mail/i);
      fireEvent.change(emailInput, { target: { value: "random" } });
      fireEvent.blur(emailInput);
      const emailInvalidError = await screen.findByText(
        /must be a valid email/i
      );
      expect(emailInvalidError).toBeInTheDocument();
    });
  });

  test("should call forgotten password endpoint on submit", async () => {
    const submitButton = screen.getByText(/reset password/i);
    const emailInput = screen.getByLabelText(/e-mail/i);
    fireEvent.change(emailInput, { target: { value: "random@mail.com" } });
    fireEvent.blur(emailInput);
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(forgottenPasswordRequest).toBeCalledTimes(1);
    });
  });
});
