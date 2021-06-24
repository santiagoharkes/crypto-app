import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 20px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 20px;
  width: 100%;
  max-width: 400px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
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

export const AgregarCarteraButton = styled.button`
  border: none;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.green};
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.green};
`;

export const AgregarDineroContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const CancelarButton = styled(AgregarCarteraButton)`
  cursor: pointer;
  background: transparent;
  color: ${(props) => props.theme.colors.text};
  border: 1px solid transparent;

  &:hover {
    color: ${(props) => props.theme.colors.red};
    border: 1px solid ${(props) => props.theme.colors.red};
  }
`;

export const InputErrorStyled = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.red};
`;
