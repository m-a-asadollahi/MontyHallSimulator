import { TextStyled } from "./nameStyles";
import { NamePropsType } from "./types";

const Name = (props: NamePropsType) => {
  return (
    <TextStyled textColor="#645caa" textShadowColor="#beb9e6">
      {props.name}
    </TextStyled>
  );
};

export default Name;
