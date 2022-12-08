import { useAppSelector } from "../../../store/storeHook";
import Name from "../../appName/name";
import InputForm from "../../inputForm/inputForm";
import ResultPanel from "../../resultPanel/resultPanel";
import { HeaderContainerStyled } from "./headerContainerStyles";

const HeaderConbtainer = () => {
  const simulator = useAppSelector((state) => state.simulator);
  return (
    <HeaderContainerStyled>
      <Name name="Monty Hall Simulation" />
      <InputForm />
      {(simulator.showChart || simulator.showDetails) && <ResultPanel />}
    </HeaderContainerStyled>
  );
};

export default HeaderConbtainer;
