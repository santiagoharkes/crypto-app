import styled from "styled-components";
import { RiCloseFill } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";
import { DineroDisponibleCard } from "../../pages/home/HomeStyles";

export const IconsContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseIcon = styled(RiCloseFill)`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const EditIcon = styled(FiEdit3)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const CarteraCardStyled = styled(DineroDisponibleCard)`
  max-width: 100%;
  background: #f12711; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    140deg,
    #f5af19 0%,
    #f12711 100%
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    140deg,
    #f5af19 0%,
    #f12711 100%
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  position: relative;
`;

export const DineroCartTitle = styled.p``;

export const DineroCantidadTitle = styled.p`
  font-size: 40px;
  font-weight: 500;
`;

export const DineroButtonStyled = styled.button`
  border: none;
  padding: 10px;
  border-radius: 10px;
  max-width: 150px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.black};
    color: ${(props) => props.theme.colors.white};
    max-width: 100%;
  }
`;

export const EditFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const EditInputStyled = styled.input`
  border: none;
  border-radius: 10px;
  padding: 5px;
  width: 100%;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px ${(props) => props.theme.colors.white};
  }
`;

export const EditButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const EditButtonStyled = styled.button`
  padding: 5px;
  border: 1px solid ${(props) => props.theme.colors.white};
  background: transparent;
  flex: 1;
  border-radius: 10px;
  padding: 5px 10px;
  color: ${(props) => props.theme.colors.white};
  min-width: 100px;
  cursor: pointer;
  overflow: hidden;
  position: relative;

  &:hover > span {
    z-index: 5;
    position: relative;
    background: ${(props) =>
      props.edit
        ? props.theme.colors.green
        : props.cancel
        ? props.theme.colors.red
        : props.theme.colors.white};
  }

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    content: "";
    background: ${(props) =>
      props.edit
        ? props.theme.colors.green
        : props.cancel
        ? props.theme.colors.red
        : props.theme.colors.white};
    transition: transform 0.3s;

    transform-origin: right top;
    transform: scale(0, 1);
  }

  &:hover::before {
    transform-origin: left top;
    transform: scale(1, 1);
  }
`;

export const EditInputErrorStyled = styled.p``;
