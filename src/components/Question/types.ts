import { AnswerValueType } from "../QuestionsForm/types";

export enum AnswerType {
  RadioSelection = "RadioSelection",
  FreeFormText = "FreeFormText",
  SetOfCheckboxes = "SetOfCheckboxes"
}

export type QuestionProps = {
  possibleAnswers?: string[];
  answerType: AnswerType;
  question: string;
  currentAnswer: AnswerValueType;
  setCurrentAnswer: (value: AnswerValueType) => void;
  setIsAnswerEmpty: (value: boolean) => void;
};
