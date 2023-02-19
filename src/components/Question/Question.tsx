import { AnswerType, QuestionProps } from "./types";
import { QuestionWrapper, QuestionText } from "./styles";
import RadioButton from "../RadioButton";
import Checkbox from "../Checkbox";
import FreeFormText from "../FreeFormText";
import { useCallback, useMemo } from "react";

const Question: React.FC<QuestionProps> = ({
  answerType,
  question,
  possibleAnswers,
  currentAnswer,
  setCurrentAnswer,
  setIsAnswerEmpty
}) => {
  const onFreeFormTextChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = event.target;
      setCurrentAnswer(value);

      if (value.length > 0) {
        setIsAnswerEmpty(false);
      }
    },
    [setCurrentAnswer, setIsAnswerEmpty]
  );

  const onCheckBoxChange = useCallback(
    (answer: string) => {
      if (Array.isArray(currentAnswer) && currentAnswer.length > 0) {
        setCurrentAnswer([...currentAnswer, answer]);
      } else {
        setCurrentAnswer([answer]);
        setIsAnswerEmpty(false);
      }

      if (Array.isArray(currentAnswer) && currentAnswer?.includes(answer)) {
        setCurrentAnswer(
          currentAnswer?.filter((element: string) => element !== answer)
        );
      }
    },
    [currentAnswer, setCurrentAnswer, setIsAnswerEmpty]
  );

  const onRadioButtonChange = useCallback(
    (answer: string) => {
      setCurrentAnswer(answer);
      setIsAnswerEmpty(false);
    },
    [setCurrentAnswer, setIsAnswerEmpty]
  );

  const renderPossibleAnswers = useMemo(() => {
    switch (answerType) {
      case AnswerType.RadioSelection:
        return possibleAnswers?.map((answer: string) => (
          <RadioButton
            key={answer}
            onChange={() => onRadioButtonChange(answer)}
            checked={currentAnswer === answer}
            label={answer}
          />
        ));
      case AnswerType.SetOfCheckboxes:
        return possibleAnswers?.map((answer: string) => (
          <Checkbox
            key={answer}
            onChange={() => onCheckBoxChange(answer)}
            checked={
              Array.isArray(currentAnswer) && currentAnswer.includes(answer)
            }
            label={answer}
          />
        ));
      case AnswerType.FreeFormText:
        return (
          <FreeFormText
            onChange={onFreeFormTextChange}
            placeholder="Type your answer here..."
          />
        );
    }
  }, [
    possibleAnswers,
    answerType,
    currentAnswer,
    onCheckBoxChange,
    onFreeFormTextChange,
    onRadioButtonChange
  ]);

  return (
    <QuestionWrapper>
      <QuestionText>{question}</QuestionText>
      {renderPossibleAnswers}
    </QuestionWrapper>
  );
};

export default Question;
