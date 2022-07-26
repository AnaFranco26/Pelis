import { FaSpinner } from "react-icons/fa";
import { Spinner as SpinnerStyled, Spinning } from "./styled";

export function Spinner() {
  return (
    <SpinnerStyled>
      <Spinning><FaSpinner  size={60} /></Spinning>
    </SpinnerStyled>
  );
}