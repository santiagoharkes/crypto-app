import styled from "styled-components";

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
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${(props) => props.theme.colors.white};

  @media screen and (max-width: 500px) {
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

  &:focus {
    outline: none;
    box-shadow: 0px 0px 11px #0000001c;
  }
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

export const AgregarCarteraButton = styled.button`
  background: ${(props) => props.theme.colors.text};
  border: none;
  padding: 10px;
  border-radius: 10px;
  max-width: 150px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.bg};
  margin: 0 10px;
`;

export const CarterasContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px 0;
`;

export const RemoveCard = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 45px;
  height: 45px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 45px;
    height: 45px;
  }
`;

export const NoHayCarteras = styled.p`
  padding: 20px;
  text-align: center;
`;
