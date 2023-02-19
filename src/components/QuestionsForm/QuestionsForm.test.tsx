import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import QuestionsForm from "./QuestionsForm";
import mockedData from "../../mocks/data";

test("renders correctly", async () => {
  // ARRANGE
  const data = mockedData;
  render(<QuestionsForm data={data} />);

  // ASSERT
  expect(screen.getByText("Completed 0 of 3")).toBeInTheDocument();
  expect(screen.getByRole("button")).toHaveTextContent("Continue ➡");
});

test("should show error text when user do not provide answer", async () => {
  // ARRANGE
  const data = mockedData;
  render(<QuestionsForm data={data} />);

  // ACT
  await userEvent.click(screen.getByRole("button"));

  // ASSERT
  expect(screen.getByText("Completed 0 of 3")).toBeInTheDocument();
  expect(
    screen.getByText("You must provide at least one answer")
  ).toBeInTheDocument();
});

test("should procced to next question when user provide answer", async () => {
  // ARRANGE
  const data = mockedData;
  render(<QuestionsForm data={data} />);

  // ACT
  await userEvent.click(screen.getAllByRole("radio")[0]);
  await userEvent.click(screen.getByRole("button"));

  // ASSERT
  expect(screen.getByText("Completed 1 of 3")).toBeInTheDocument();
});

test("should show summary when user finished all questions", async () => {
  // ARRANGE
  const data = mockedData;
  render(<QuestionsForm data={data} />);

  // ACT
  await userEvent.click(screen.getAllByRole("radio")[0]);
  await userEvent.click(screen.getByRole("button"));
  await userEvent.click(screen.getAllByRole("checkbox")[0]);
  await userEvent.click(screen.getByRole("button"));
  await userEvent.type(screen.getByRole("textbox"), "Test answer");
  await userEvent.click(screen.getByRole("button"));

  // ASSERT
  expect(
    screen.getByText("Congrats! You completed all questions.")
  ).toBeInTheDocument();
  expect(screen.getByText("Answer: Dog 🐕")).toBeInTheDocument();
  expect(screen.getByText("Answer: Audi")).toBeInTheDocument();
  expect(screen.getByText("Answer: Test answer")).toBeInTheDocument();
});
