import { fireEvent, screen } from "@testing-library/react";

export const assertMessage = async (message) => {
  const messageToFind = await screen.findByText(message);
  expect(messageToFind).toBeInTheDocument();
};

export const handleInputChange = (input: HTMLElement, value: string) => {
  fireEvent.change(input, { target: { value } });
  fireEvent.blur(input);
};
