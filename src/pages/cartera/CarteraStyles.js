import styled from "styled-components";

export const GridRowStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  padding: 20px 10px;
  background: ${(props) =>
    props.first ? props.theme.colors.border : "transparent"};
  border-radius: ${(props) => (props.first ? "10px 10px 0 0" : "0")};
`;

export const ColumnStyled = styled.div`
  width: 100%;
  color: ${(props) =>
    props.direction ? (props.direction === "up" ? "green" : "red") : "white"};
`;

export const CoinCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  place-items: center;
  margin: 20px 0;
`;

export const AssetsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 10px;

  @media screen and (max-width: 690px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, auto);
  }
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

export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;
