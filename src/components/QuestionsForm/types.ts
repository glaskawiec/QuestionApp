import { AnswerType } from "../Question";

export type QuestionFormData = {
  id: number;
  question: string;
  answerType: AnswerType;
  possibleAnswers: string[];
};

export type AnswerValueType = string | string[] | null;

export type Answer<Type> = {
  questionId: number;
  question: string;
  answer: Type;
};

export type ErrorTextProps = {
  isVisible: boolean;
};

export type QuestionsFormProps = {
  data: QuestionFormData[];
};
