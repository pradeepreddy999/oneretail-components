import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("render label Click Me", () => {
  const label = "Click Me";
  const ButtonElement = <Button label={label} onClick={() => {}} />;
  render(ButtonElement);
  expect(screen.getByText("Click Me")).toBeInTheDocument();
});
