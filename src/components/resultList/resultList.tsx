import React, { Suspense } from "react";
import { useAppSelector } from "../../store/storeHook";
import { getSimulationIndexOnPage, paginate } from "../utils/utils";
import { ResultListStyled } from "./resultListStyles";
import { ImpulseSpinner } from "react-spinners-kit";

const GameCard = React.lazy(() => import("../gameCard/gameCard"));

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
        <Suspense
          fallback={<ImpulseSpinner frontColor="#645caa" backColor="#e0e0e0" />}
          key={index}
        >
          <GameCard
            key={index}
            data={game}
            index={getSimulationIndexOnPage(
              index,
              pagination.currentPage,
              pagination.pageSize
            )}
          />
        </Suspense>
      ))}
    </ResultListStyled>
  );
};

export default ResultList;
