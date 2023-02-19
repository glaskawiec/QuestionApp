import { RadioButtonWrapper, Label, RadioButtonStyled } from "./styles";
import { RadioButtonProps } from "./types";

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  onChange,
  checked
}) => {
  return (
    <RadioButtonWrapper onClick={onChange}>
      <RadioButtonStyled id={label} readOnly checked={checked} type="radio" />
      <Label htmlFor={label}>{label}</Label>
    </RadioButtonWrapper>
  );
};

export default RadioButton;
