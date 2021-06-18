import styled from "styled-components";

export const SubSectionContainer = styled.div`
  margin: 10px 0;
`;

export const DineroDisponibleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  @media screen and (max-width: 500px) {
    justify-content: center;
    align-items: center;
  }
`;

export const DineroDisponibleCard = styled.article`
  background: ${(props) => props.theme.colors.green};
  padding: 20px;
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
  margin: 10px 0;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${(props) => props.theme.colors.white};

  @media screen and (max-width: 500px) {
    max-width: 100%;
  }
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

export const AgregarDineroContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AgregarInput = styled.input`
  border-radius: 20px;
  border: none;
  padding: 10px;
`;

export const ErrorInput = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.red};
  padding: 5px;
  border-radius: 10px;
`;

export const CancelarButton = styled(DineroButtonStyled)`
  cursor: pointer;
  background: transparent;
  color: ${(props) => props.theme.colors.white};
  border: 1px solid transparent;

  &:hover {
    background: transparent;
    color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.white};
  }
`;

export const CarterasContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

export const CarteraCard = styled(DineroDisponibleCard)`
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
`;

export const NoHayCarteras = styled.p`
  padding: 20px;
`;
