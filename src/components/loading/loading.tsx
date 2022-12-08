import { GuardSpinner } from "react-spinners-kit";
import { LoadingText, LoadingWrapper } from "./loadingStyles";
import { LoadingProsType } from "./types";

const Loading = (props: LoadingProsType) => {
  return (
    <>
      {props.visible && (
        <LoadingWrapper>
          <GuardSpinner size={60} frontColor="#645caa" />
          <LoadingText>Please wait ...</LoadingText>
        </LoadingWrapper>
      )}
    </>
  );
};

export default Loading;
