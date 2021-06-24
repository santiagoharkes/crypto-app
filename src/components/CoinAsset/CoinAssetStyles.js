import styled from "styled-components";

export const CoinAssetContainerStyled = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
  margin: 10px 0;
  background: transparent;
  color: ${(p) => p.theme.colors.text};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  width: 100%;

  place-items: center;
`;

export const TextStyled = styled.p`
  width: 100%;
  text-align: center;

  @media screen and (max-width: 690px) {
    font-size: 14px;
  }
`;

export const PercStyled = styled.p`
  padding: 5px;
  width: 100%;
  max-width: 100px;
  background: ${(props) =>
    props.direction === "up"
      ? props.theme.colors.green
      : props.direction === "down"
      ? props.theme.colors.red
      : props.theme.colors.white};
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
