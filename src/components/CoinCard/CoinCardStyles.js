import styled from "styled-components";

export const CoinCardStyled = styled.div`
  max-width: 350px;
  min-height: 135px;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  background: #232526;
  background: ${(props) =>
    props.theme.theme === "dark"
      ? `linear-gradient(
    145deg,
    #414345 0%,
    #232526 100%
  )`
      : `linear-gradient( 145deg,#dcdedf 0%,#9b9c9d5e 100% )`};
  color: ${(props) => props.theme.colors.text};
`;

export const CoinCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas: "precioTitle precio" "percTitle perc";
  width: 100%;
  gap: 5px;
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 10px;
  border-radius: 20px;
`;

export const CoinCardImage = styled.img`
  max-width: 50px;
`;

export const CoinCardItem = styled.div`
  grid-area: ${(props) => (props.gridArea ? props.gridArea : "unset")};
  background: ${(props) =>
    props.direction
      ? props.direction === "up"
        ? props.theme.colors.green
        : "red"
      : "transparent"};
  border-radius: 10px;
  padding: 5px 0;
  color: ${(props) => (props.direction ? "white" : props.theme.colors.text)};
  text-align: ${(props) => (props.center ? "center" : "unset")};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  flex-wrap: wrap;
`;

export const ButtonStyled = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px;
  min-width: 120px;
  flex: 1;
  cursor: pointer;
  background: transparent;
  border: 1px solid
    ${(props) =>
      props.sell
        ? props.theme.colors.red
        : props.buy
        ? props.theme.colors.green
        : props.theme.colors.white};
  color: ${(props) =>
    props.sell
      ? props.theme.colors.red
      : props.buy
      ? props.theme.colors.green
      : props.theme.colors.white};

  &:hover {
    background: ${(props) =>
      props.sell
        ? props.theme.colors.red
        : props.buy
        ? props.theme.colors.green
        : props.theme.colors.white};
    color: white;
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
`;

export const InputStyled = styled.input`
  border-radius: 20px;
  border: none;
  padding: 10px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 11px #0000001c;
  }
`;

export const LabelStyled = styled.label`
  color: ${(props) => props.theme.colors.white};
`;

export const SubTitleStyled = styled.p`
  text-align: center;
  font-size: 14px;
  color: ${(props) => props.theme.colors.text};
  opacity: 0.5;
`;
