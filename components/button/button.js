import { StyledButton } from "../../styles/theme.js/theme";

export const Button = ({ children, className, onClick }) => {
  return (
    <>
      <StyledButton
        onClick={onClick}
        className={`${className} rounded-l-md px-4 py-2`}
      >
        {children}
      </StyledButton>
    </>
  );
};
