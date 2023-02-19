import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Question from "./Question";
import { AnswerType } from "./types";

test("renders correctly with radio selection", async () => {
  // ARRANGE
  const questionProps = {
    setIsAnswerEmpty: () => ({}),
    setCurrentAnswer: () => ({}),
    currentAnswer: "",
    answerType: AnswerType.RadioSelection,
    question: "Test Question",
    possibleAnswers: ["Answer 1", "Answer 2"]
  };

  render(<Question {...questionProps} />);

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Test Question");
  expect(screen.getAllByRole("radio")).toHaveLength(2);
  expect(screen.getByLabelText("Answer 1")).toBeInTheDocument();
  expect(screen.getByLabelText("Answer 2")).toBeInTheDocument();
});

test("renders correctly with set of checkboxes", async () => {
  // ARRANGE
  const questionProps = {
    setIsAnswerEmpty: () => ({}),
    setCurrentAnswer: () => ({}),
    currentAnswer: "",
    answerType: AnswerType.SetOfCheckboxes,
    question: "Test Question 2",
    possibleAnswers: ["Answer 3", "Answer 4", "Answer 5"]
  };

  render(<Question {...questionProps} />);

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Test Question 2");
  expect(screen.getAllByRole("checkbox")).toHaveLength(3);
  expect(screen.getByLabelText("Answer 3")).toBeInTheDocument();
  expect(screen.getByLabelText("Answer 4")).toBeInTheDocument();
  expect(screen.getByLabelText("Answer 5")).toBeInTheDocument();
});

test("renders correctly with free form text", async () => {
  // ARRANGE
  const questionProps = {
    setIsAnswerEmpty: () => ({}),
    setCurrentAnswer: () => ({}),
    currentAnswer: "",
    answerType: AnswerType.FreeFormText,
    question: "Test Question 3"
  };

  render(<Question {...questionProps} />);

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("Test Question 3");
  expect(document.getElementById("textarea")).toBeInTheDocument();
});
