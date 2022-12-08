import { useAppSelector } from "../../store/storeHook";
import GameCard from "../gameCard/gameCard";
import { getSimulationIndexOnPage, paginate } from "../utils/utils";
import { ResultListStyled } from "./resultListStyles";

const ResultList = () => {
  const simulator = useAppSelector((state) => state.simulator);
  const pagination = useAppSelector((state) => state.pagination);

  const simulations = paginate(
    simulator.simulations,
    pagination.currentPage,
    pagination.pageSize
  );

  return (
    <ResultListStyled>
      {simulations.map((game, index) => (
        <GameCard
          key={index}
          data={game}
          index={getSimulationIndexOnPage(
            index,
            pagination.currentPage,
            pagination.pageSize
          )}
        />
      ))}
    </ResultListStyled>
  );
};

export default ResultList;
