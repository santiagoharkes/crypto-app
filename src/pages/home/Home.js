import { useState } from "react";
import { Link } from "react-router-dom";
import CrearCarteraForm from "../../components/CrearCarteraForm/CrearCarteraForm";
import { useCarteraActual } from "../../context/CarteraActual/CarteraActualContext";

import { RiCloseFill } from "react-icons/ri";

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
  AgregarCarteraButton,
  CloseIcon,
} from "./HomeStyles";

function Home() {
  const { dineroDisponible, carteras, agregarDinero, removeCartera } =
    useTransfers();
  const { setCarteraActual } = useCarteraActual();
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
              const precioCartera =
                valor.monedas.length === 0
                  ? 0
                  : valor.monedas.reduce(
                      (acum, actual) => acum + actual.precio,
                      0
                    );

              return (
                <CarteraCard key={valor.id}>
                  <CloseIcon onClick={() => removeCartera(valor.id)} />
                  <DineroCartTitle>{valor.nombre}</DineroCartTitle>
                  <DineroCantidadTitle>${precioCartera}</DineroCantidadTitle>
                  <DineroCartTitle>
                    Cantidad de activos: {valor.monedas.length}
                  </DineroCartTitle>
                  <Link to="/cartera">
                    <DineroButtonStyled onClick={() => setCarteraActual(valor)}>
                      Ingresar
                    </DineroButtonStyled>
                  </Link>
                </CarteraCard>
              );
            })}
          </CarterasContainer>
        )}
      </SubSectionContainer>
    </div>
  );
}

export default Home;
