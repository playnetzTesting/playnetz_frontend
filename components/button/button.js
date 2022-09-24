import { StyledButton } from "../../styles/theme.js/theme";

export const Button = ({ children, className, onClick, type }) => {
  return (
    <>
      <StyledButton
        onClick={onClick}
        className={`${className} rounded-l-md px-4 py-2`}
        type={type}
      >
        {children}
      </StyledButton>
    </>
  );
};
