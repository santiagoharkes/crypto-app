import { useState } from "react";

// Components
import CarteraCard from "../../components/CarteraCard/CarteraCard";
import CrearCarteraForm from "../../components/CrearCarteraForm/CrearCarteraForm";
import { TitleStyled } from "../../styles/utils/Title";

// Hooks & Context
import { useTransfers } from "../../context/Transfers/TransfersContext";

// Utils
import { formatPrice } from "../../utils/formatPrice";

// Styles
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

function Home() {
  const { dineroDisponible, carteras, agregarDinero } = useTransfers();
  const [agregarMode, setAgregarMode] = useState(false);
  const [dineroInput, setDineroInput] = useState("");
  const [errorInput, setErrorInput] = useState(false);
  const [agregarCartera, setAgregarCartera] = useState(false);

  const toggleAgregarMode = () => {
    setAgregarMode(!agregarMode)
  }

  const onAgregarSubmit = (e) => {
    e.preventDefault();
    if (dineroInput < 0) {
      setErrorInput(true);
      return;
    } else {
      agregarDinero(dineroInput);
      setDineroInput("");
      setAgregarMode(!agregarMode);
    }
  }

  const onInputAgregarChange = (e) => {
    setDineroInput(Number(e.target.value))
  }

  const toggleAgregarCartera = () => {
    setAgregarCartera(!agregarCartera)
  }

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
              <DineroButtonStyled onClick={toggleAgregarMode}>
                Agregar dinero
              </DineroButtonStyled>
            )}
            {agregarMode && (
              <Form
                onSubmit={onAgregarSubmit}
              >
                <AgregarInput
                  type="number"
                  name=""
                  min="0"
                  step="0.00000001"
                  id=""
                  value={dineroInput}
                  onChange={onInputAgregarChange}
                />

                {errorInput && <ErrorInput>Error perri</ErrorInput>}
                <AgregarDineroContainer>
                  <CancelarButton
                    type="button"
                    onClick={toggleAgregarMode}
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
            onClick={toggleAgregarCartera}
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
