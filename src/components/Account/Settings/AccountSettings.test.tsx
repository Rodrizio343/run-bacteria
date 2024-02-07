import { renderWithProviders } from "@/@core/infraestructure/redux/test-wrapper";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import AccountSettingsContainer from "./AccountSettings.container";
import AccountSettingsView from "./AccountSettings.view";
import { updateUserData } from "@/@core/infraestructure/session.service";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("../../../@core/infraestructure/session.service", () => ({
  updateUserData: jest.fn(),
}));

describe("account settings container", () => {
  beforeEach(() => {
    renderWithProviders(<AccountSettingsContainer />, {
      preloadedState: {
        session: {
          user: {
            id: 4,
            username: "Rodrizio",
            email: "rodrizio343@gmail.com",
            avatar: "avatarTest",
          },
          isLoading: false,
          error: null,
        },
      },
    });
  });
  test("should call updateUserData on submit", () => {
    const formEl = screen.getByTestId(/form/i);
    fireEvent.submit(formEl);
    waitFor(() => {
      expect(updateUserData).toBeCalledTimes(1);
    });
  });
});

describe("Account setting view", () => {
  const handleSubmitMock = jest.fn();

  const formMock = {
    values: {
      username: "Rodrizio",
      avatar:
        "https://www.gravatar.com/avatar/e166f62deed7db72b154d9960327df82?d=identicon",
    },
    touched: {
      username: true,
      avatar: true,
    },
    errors: {
      username: "",
      avatar: "",
    },
    handleSubmit: handleSubmitMock,
  };
  beforeEach(() => {
    renderWithProviders(<AccountSettingsView form={formMock} />, {
      preloadedState: {
        session: {
          user: {
            id: 4,
            username: formMock.values.username,
            email: "rodrizio343@gmail.com",
            avatar: formMock.values.avatar,
          },
          isLoading: false,
          error: null,
        },
      },
    });
  });
  test("should render title", () => {
    const title = screen.getByText(/Your personal details/i);
    expect(title).toBeInTheDocument();
  });

  test("should render a form component with username, avatar inputs", () => {
    const usernameEl = screen.getByLabelText(/user name/i);
    const avatarEl = screen.getByLabelText(/upload avatar/i);
    expect(usernameEl).toBeInTheDocument();
    expect(avatarEl).toBeInTheDocument();
  });

  test("should show current username", () => {
    const usernameEl = screen.getByLabelText(/user name/i);
    expect(usernameEl).toHaveValue("Rodrizio");
  });

  test("should change input value on typing", async () => {
    const usernameEl = screen.getByLabelText(/user name/i);

    fireEvent.change(usernameEl, { targe: { value: "rodri" } });

    waitFor(() => {
      expect(usernameEl).toHaveValue("rodri");
    });
  });

  test("should submit on update button click", async () => {
    const formEl = screen.getByTestId(/form/i);
    fireEvent.submit(formEl);
    expect(handleSubmitMock).toBeCalledTimes(1);
  });
});
