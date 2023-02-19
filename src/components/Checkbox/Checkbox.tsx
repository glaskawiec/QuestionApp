import { CheckboxWrapper, CheckboxStyled, Label } from "./styles";
import { CheckboxProps } from "./types";

const Checkbox: React.FC<CheckboxProps> = ({ label, onChange, checked }) => {
  return (
    <CheckboxWrapper>
      <CheckboxStyled
        id={label}
        readOnly
        checked={checked}
        type="checkbox"
        name={label}
        onClick={onChange}
      />
      <Label htmlFor={label}>{label}</Label>
    </CheckboxWrapper>
  );
};

export default Checkbox;
