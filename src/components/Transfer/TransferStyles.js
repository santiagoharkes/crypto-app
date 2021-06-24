import styled from "styled-components";

export const SubtitleStyled = styled.p`
  font-weight: bold;
  margin: 10px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.text};
  padding: 10px 0;
`;

export const TransferCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid
    ${(props) =>
      props.buy
        ? props.theme.colors.green
        : props.sell
        ? props.theme.colors.red
        : props.theme.colors.white};
  margin: 15px 0;
`;
