import { FreeFormTextProps } from "./types";

const FreeFormText: React.FC<FreeFormTextProps> = ({
  placeholder,
  onChange
}) => {
  return (
    <textarea
      id="textarea"
      onChange={onChange}
      placeholder={placeholder}
      rows={5}
      cols={33}
    />
  );
};

export default FreeFormText;
