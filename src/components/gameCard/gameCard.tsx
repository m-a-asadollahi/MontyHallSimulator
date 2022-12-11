import Door from "./door/door";
import {
  GameCardStyled,
  Doors,
  GameInfoLabel,
  GameInfo,
  GameInfoValue,
  GameInfos,
  GameResultText,
  GameCardContainer,
  GameIndex,
} from "./gameCardStyles";
import { gameCardTypes } from "./types";

const GameCard = (props: gameCardTypes) => {
  const { data } = props;
  return (
    <GameCardContainer>
      <GameResultText gameResult={data.simulationResult}>
        {data.simulationResult}
      </GameResultText>
      <GameCardStyled gameResult={data.simulationResult}>
        <Doors>
          {data.doors.map((door, index) => (
            <Door key={index} caption={`Door ${index + 1}`} kind={door} />
          ))}
        </Doors>

        <GameInfos>
          <GameInfo>
            <GameInfoValue>{data.selectedDoor + 1}</GameInfoValue>
            <GameInfoLabel>Selected Door</GameInfoLabel>
          </GameInfo>
          <GameInfo>
            <GameInfoValue>{data.revealedDoor + 1}</GameInfoValue>
            <GameInfoLabel>Revealed Door</GameInfoLabel>
          </GameInfo>
          {data.secondSelectedDoor !== undefined && (
            <GameInfo>
              <GameInfoValue>
                {(data.secondSelectedDoor as number) + 1}
              </GameInfoValue>
              <GameInfoLabel>Switched Door </GameInfoLabel>
            </GameInfo>
          )}
        </GameInfos>
      </GameCardStyled>
      <GameIndex>{`Simulation : ${props.index}`}</GameIndex>
    </GameCardContainer>
  );
};

export default GameCard;
