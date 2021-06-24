import { useState } from "react";
import CarteraCard from "../../components/CarteraCard/CarteraCard";
import CrearCarteraForm from "../../components/CrearCarteraForm/CrearCarteraForm";

import { useTransfers } from "../../context/Transfers/TransfersContext";
import { TitleStyled } from "../../styles/utils/Title";
import {
  SubSectionContainer,
  DineroDisponibleContainer,
  DineroDisponibleCard,
  CarterasContainer,
  AgregarDineroContainer,
  CancelarButton,
  AgregarInput,
  ErrorInput,
  Form,
  NoHayCarteras,
  AgregarCarteraButton,
  DineroButtonStyled,
} from "./HomeStyles";

import {
  DineroCartTitle,
  DineroCantidadTitle,
} from "../../components/CarteraCard/CarteraStyles";
import { formatPrice } from "../../utils/formatPrice";

function Home() {
  const { dineroDisponible, carteras, agregarDinero } = useTransfers();
  const [agregarMode, setAgregarMode] = useState(false);
  const [dineroInput, setDineroInput] = useState("");
  const [errorInput, setErrorInput] = useState(false);
  const [agregarCartera, setAgregarCartera] = useState(false);

  return (
    <div>
      <SubSectionContainer>
        <TitleStyled>Dinero disponible:</TitleStyled>
        <DineroDisponibleContainer>
          <DineroDisponibleCard>
            <DineroCartTitle>Este es tu dinero disponible:</DineroCartTitle>
            <DineroCantidadTitle>
              {formatPrice(dineroDisponible)}
            </DineroCantidadTitle>
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
                  step="0.00000001"
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
        <TitleStyled>
          Mis carteras
          <AgregarCarteraButton
            onClick={() => setAgregarCartera(!agregarCartera)}
          >
            Agregar Cartera
          </AgregarCarteraButton>
        </TitleStyled>

        {agregarCartera && (
          <CrearCarteraForm setAgregarCartera={setAgregarCartera} />
        )}

        {carteras.length === 0 && (
          <NoHayCarteras>No hay carteras, agrega una!</NoHayCarteras>
        )}
        {carteras.length > 0 && (
          <CarterasContainer>
            {carteras.map((valor) => {
              return <CarteraCard key={valor.id} valor={valor} />;
            })}
          </CarterasContainer>
        )}
      </SubSectionContainer>
    </div>
  );
}

export default Home;
