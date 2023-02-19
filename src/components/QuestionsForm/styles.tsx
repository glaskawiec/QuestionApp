import styled from "styled-components";
import { ErrorTextProps } from "./types";

export const CompletedStatusText = styled.span``;

export const FormWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 960px;
  padding-right: 10px;
  padding-left: 10px;
`;

export const ErrorText = styled.div<ErrorTextProps>`
  color: red;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`;
