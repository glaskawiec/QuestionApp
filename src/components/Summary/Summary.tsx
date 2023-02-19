import React from "react";
import { AnswerWrapper } from "./styles";
import { SummaryProps } from "./types";

const Summary: React.FC<SummaryProps> = ({ answers }) => {
  return (
    <>
      <h4>Congrats! You completed all questions.</h4>
      {answers.map((answer) => (
        <AnswerWrapper key={answer.questionId}>
          <span>Question: {answer.question}</span>
          <span>
            Answer:{" "}
            {Array.isArray(answer.answer)
              ? answer.answer.toString()
              : answer.answer}
          </span>
        </AnswerWrapper>
      ))}
    </>
  );
};

export default Summary;
