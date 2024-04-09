import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import ResetPasswordContainer from "./ResetPassword.container";
import { assertMessage, handleInputChange } from "@/utils/test/test.utils";
import { resetPasswordRequest } from "@/@core/infraestructure/session.service";

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({
    query: {
      code: "das21e3ed23d21d",
    },
  }),
}));

jest.mock("../../@core/infraestructure/session.service");
const mockedResetPasswordRequest = jest.mocked(resetPasswordRequest, true);

const simulateSubmit = () => {
  const submitButton = screen.getByText(/reset password/i);
  const newPasswordInput = screen.getByLabelText(/new password/i);
  const newPasswordConfirmationInput = screen.getByLabelText(
    /password confirmation/i
  );
  handleInputChange(newPasswordInput, "Rodrizio.123");
  handleInputChange(newPasswordConfirmationInput, "Rodrizio.123");
  fireEvent.click(submitButton);
};

const assertDisabledButton = () => {
  const submitButton = screen.getByText(/reset password/i);
  expect(submitButton).toBeDisabled();
};

const assertEnabledButton = () => {
  const submitButton = screen.getByText(/reset password/i);
  expect(submitButton).not.toBeDisabled();
};

describe("Reset Password Container", () => {
  beforeEach(() => {
    render(<ResetPasswordContainer />);
    jest.clearAllMocks();
  });

  test("should render form with inputs", () => {
    const newPasswordInput = screen.getByLabelText(/new password/i);
    const newPasswordConfirmInput = screen.getByLabelText(
      /password confirmation/i
    );
    const submitButton = screen.getByText(/reset password/i);

    expect(newPasswordInput).toBeInTheDocument();
    expect(newPasswordConfirmInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  describe("Submit Button State", () => {
    test("should be disabled in the first render", () => {
      assertDisabledButton();
    });

    test("should be disabled if the passwords do not match ", async () => {
      const newPasswordInput = screen.getByLabelText(/new password/i);
      const newPasswordConfirmationInput = screen.getByLabelText(
        /password confirmation/i
      );
      handleInputChange(newPasswordInput, "Rodrizio.123");
      handleInputChange(newPasswordConfirmationInput, "Random.456");
      await waitFor(assertDisabledButton);
    });

    test("should be enabled if the passwords match ", async () => {
      await act(async () => {
        const newPasswordInput = screen.getByLabelText(/new password/i);
        const newPasswordConfirmationInput = screen.getByLabelText(
          /password confirmation/i
        );
        handleInputChange(newPasswordInput, "Rodrizio.123");
        handleInputChange(newPasswordConfirmationInput, "Rodrizio.123");
        await waitFor(assertEnabledButton);
      });
    });
  });

  describe("Password Validation Messages", () => {
    test("should show required password message when the input is empty", async () => {
      const newPasswordInput = screen.getByLabelText(/new password/i);
      handleInputChange(newPasswordInput, "");
      await assertMessage(/password is required/i);
    });

    test("should show invalid password message when the input is invalid", async () => {
      const newPasswordInput = screen.getByLabelText(/new password/i);
      handleInputChange(newPasswordInput, "random");
      await assertMessage(/minimum/i);
    });

    test("should show password mismatch message if the password and password confirmation value are different", async () => {
      const newPasswordInput = screen.getByLabelText(/new password/i);
      const newPasswordConfirmationInput = screen.getByLabelText(
        /password confirmation/i
      );
      handleInputChange(newPasswordInput, "Rodrizio.123");
      handleInputChange(newPasswordConfirmationInput, "Random.456");
      await assertMessage(/passwords must match/i);
    });
  });

  describe("Submit Form", () => {
    test("should call reset password endpoint on submit", async () => {
      simulateSubmit();
      await waitFor(() => {
        expect(resetPasswordRequest).toBeCalledTimes(1);
      });
    });

    test("should show error message in case of wrong submit", async () => {
      simulateSubmit();
      mockedResetPasswordRequest.mockRejectedValue(
        new Error("Something went wrong")
      );
      await assertMessage("Something went wrong");
    });

    test("should show success message in case of successful submit", async () => {
      simulateSubmit();
      mockedResetPasswordRequest.mockResolvedValue({
        user: { name: "rodri" },
        jwt: "random",
      });
      await assertMessage(
        "Your password has been updated succesfully. Please, sign in again."
      );
    });
  });
});
