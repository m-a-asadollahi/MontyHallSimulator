import { TDoorValue } from "../../../models/gameSimulator";
import { DoorImg, DoorLabel, DoorStyled } from "./doorStyles";
import { DoorPropsType } from "./types";

const Door = (props: DoorPropsType) => {
  const getDoorImagePath = (doorKind: TDoorValue) => {
    switch (doorKind) {
      case "Car":
        return "img/car.png";
      case "Goat":
        return "img/goat.png";
      default:
        return "";
    }
  };

  return (
    <DoorStyled>
      <DoorImg alt="test" src={getDoorImagePath(props.kind)} />
      <DoorLabel>{props.caption}</DoorLabel>
    </DoorStyled>
  );
};

export default Door;
