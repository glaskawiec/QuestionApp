import QuestionsForm from "../QuestionsForm/QuestionsForm";
import { Wrapper } from "./styles";
import data from "../../mocks/data.json";
import GlobalStyle from "../../GlobalStyle";

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h2>Questionnaire app</h2>
        <QuestionsForm data={data} />
      </Wrapper>
    </>
  );
};

export default App;
