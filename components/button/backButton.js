import { StyledBackButton } from "../../styles/theme.js/theme";
import { BackIcon } from "../icons/backIcon";

export const BackButton = () => {
  return (
    <>
      <StyledBackButton onClick={() => router.back()}>
        <BackIcon />
        back
      </StyledBackButton>
    </>
  );
};
