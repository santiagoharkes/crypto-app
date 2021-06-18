import { useState } from "react";
import CrearCarteraForm from "../../components/CrearCarteraForm/CrearCarteraForm";

import { useTransfers } from "../../context/Transfers/TransfersContext";
import { TitleStyled } from "../../styles/utils/Title";
import {
  SubSectionContainer,
  DineroDisponibleContainer,
  DineroDisponibleCard,
  DineroCartTitle,
  DineroCantidadTitle,
  DineroButtonStyled,
  CarterasContainer,
  CarteraCard,
  AgregarDineroContainer,
  CancelarButton,
  AgregarInput,
  ErrorInput,
  Form,
  NoHayCarteras,
} from "./HomeStyles";

function Home() {
  const { dineroDisponible, carteras, agregarDinero } = useTransfers();
  const [agregarMode, setAgregarMode] = useState(false);
  const [dineroInput, setDineroInput] = useState("");
  const [errorInput, setErrorInput] = useState(false);

  return (
    <div>
      <SubSectionContainer>
        <TitleStyled>Dinero disponible:</TitleStyled>
        <DineroDisponibleContainer>
          <DineroDisponibleCard>
            <DineroCartTitle>Este es tu dinero disponible:</DineroCartTitle>
            <DineroCantidadTitle>${dineroDisponible}</DineroCantidadTitle>
            {!agregarMode && (
              <DineroButtonStyled onClick={() => setAgregarMode(!agregarMode)}>
                Agregar dinero
              </DineroButtonStyled>
            )}
            {agregarMode && (
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (dineroInput < 0) {
                    setErrorInput(true);
                    return;
                  } else {
                    agregarDinero(dineroInput);
                    setDineroInput("");
                    setAgregarMode(!agregarMode);
                  }
                }}
              >
                <AgregarInput
                  type="number"
                  name=""
                  min="0"
                  id=""
                  value={dineroInput}
                  onChange={(e) => setDineroInput(Number(e.target.value))}
                />

                {errorInput && <ErrorInput>Error perri</ErrorInput>}
                <AgregarDineroContainer>
                  <CancelarButton
                    type="button"
                    onClick={() => setAgregarMode(!agregarMode)}
                  >
                    Cancelar
                  </CancelarButton>
                  <DineroButtonStyled type="submit">
                    Transferir
                  </DineroButtonStyled>
                </AgregarDineroContainer>
              </Form>
            )}
          </DineroDisponibleCard>
        </DineroDisponibleContainer>
      </SubSectionContainer>

      <SubSectionContainer>
        <TitleStyled>Mis carteras</TitleStyled>
        {carteras.length === 0 && (
          <NoHayCarteras>No hay carteras, agrega una!</NoHayCarteras>
        )}
        {carteras.length > 0 && (
          <CarterasContainer>
            {carteras.map((valor) => {
              return (
                <CarteraCard key={valor.id}>
                  <DineroCartTitle>{valor.nombre}</DineroCartTitle>
                  <DineroCantidadTitle>${dineroDisponible}</DineroCantidadTitle>
                  <DineroCartTitle>
                    Cantidad de activos: {valor.monedas.length}
                  </DineroCartTitle>
                  <DineroButtonStyled>Ingresar</DineroButtonStyled>
                </CarteraCard>
              );
            })}
          </CarterasContainer>
        )}
        <CrearCarteraForm />
      </SubSectionContainer>
    </div>
  );
}

export default Home;
