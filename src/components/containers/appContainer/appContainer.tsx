import { useAppSelector, useAppDispatch } from "../../../store/storeHook";
import { ToastContainer } from "react-toastify";
import { AppContainerStyled } from "./appContainerStyles";
import Loading from "../../loading/loading";
import SimulationChart from "../../chart/simulationChart";
import HeaderContainer from "../headerContainer/headerContainer";
import ResultList from "../../resultList/resultList";
import PaginationNav from "../../pagination/paginationNav";

const AppContainer = () => {
  const simulator = useAppSelector((state) => state.simulator);

  return (
    <AppContainerStyled>
      <HeaderContainer />
      <Loading visible={simulator.loading} />
      {simulator.showChart && <SimulationChart />}
      {simulator.showDetails && <ResultList />}
      {simulator.showDetails && (
        <PaginationNav totalCounts={simulator.simulations.length} />
      )}

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </AppContainerStyled>
  );
};

export default AppContainer;
