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
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas: "precioTitle precio" "percTitle perc" "sell buy";
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
        ? "green"
        : "red"
      : "transparent"};
  border-radius: 10px;
  padding: 5px 0;
  color: ${(props) => (props.direction ? "white" : props.theme.colors.text)};
  text-align: ${(props) => (props.direction ? "center" : "unset")};
`;
