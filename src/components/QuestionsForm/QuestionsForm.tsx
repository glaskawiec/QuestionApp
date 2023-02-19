import { useState } from "react";
import Question from "../Question";
import { AnswerType } from "../Question";
import { AnswerValueType } from "./types";
import Button from "../Button";
import Summary from "../Summary";
import { CompletedStatusText, FormWrapper, ErrorText } from "./styles";
import { QuestionsFormProps, Answer } from "./types";

const QuestionsForm: React.FC<QuestionsFormProps> = ({ data }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [answers, setAnswers] = useState<Answer<AnswerValueType>[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<AnswerValueType>(null);
  const [isAnswerEmpty, setIsAnswerEmpty] = useState<boolean | null>(null);

  const numberOfQuestions = data.length;

  const onContinueClick = () => {
    if (!currentAnswer || currentAnswer?.length <= 0) {
      setIsAnswerEmpty(true);
      return;
    }

    if (currentAnswer?.length > 0) {
      if (currentQuestion < numberOfQuestions) {
        const commonAnswerProps = {
          questionId: data[currentQuestion].id,
          question: data[currentQuestion].question
        };
        switch (data[currentQuestion].answerType) {
          case AnswerType.SetOfCheckboxes: {
            if (Array.isArray(currentAnswer)) {
              const newAnswer: Answer<string[]> = {
                ...commonAnswerProps,
                answer: currentAnswer
              };
              setAnswers([...answers, newAnswer]);
            }

            break;
          }
          case AnswerType.FreeFormText:
          case AnswerType.RadioSelection: {
            if (typeof currentAnswer === "string") {
              const newAnswer: Answer<string> = {
                ...commonAnswerProps,
                answer: currentAnswer
              };
              setAnswers([...answers, newAnswer]);
            }
            break;
          }
        }
      }

      setCurrentAnswer(null);
      setIsAnswerEmpty(null);
    }

    if (currentQuestion < numberOfQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };

  return isCompleted ? (
    <Summary answers={answers} />
  ) : (
    <FormWrapper>
      <CompletedStatusText>
        Completed {currentQuestion} of {numberOfQuestions}
      </CompletedStatusText>
      <Question
        setIsAnswerEmpty={setIsAnswerEmpty}
        setCurrentAnswer={setCurrentAnswer}
        currentAnswer={currentAnswer}
        answerType={data[currentQuestion]?.answerType as AnswerType}
        question={data[currentQuestion]?.question}
        possibleAnswers={data[currentQuestion]?.possibleAnswers}
      />
      <ErrorText isVisible={isAnswerEmpty}>
        You must provide at least one answer
      </ErrorText>
      <Button onClick={onContinueClick}>Continue ➡</Button>
    </FormWrapper>
  );
};

export default QuestionsForm;
