import { GuardSpinner, MetroSpinner } from "react-spinners-kit";
import { LoadingText, LoadingWrapper } from "./loadingStyles";
import { LoadingProsType } from "./types";

const Loading = (props: LoadingProsType) => {
  return (
    <>
      {props.visible && (
        <LoadingWrapper>
          <GuardSpinner size={60} frontColor="#645caa" backColor="#e0e0e0" />
          <LoadingText>Please wait ...</LoadingText>
        </LoadingWrapper>
      )}
    </>
  );
};

export default Loading;
