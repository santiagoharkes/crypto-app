import React from "react";
import { Doughnut } from "react-chartjs-2";
import { useTheme } from "../../context/theme/ThemeContext";

function CoinsChart({ cartera, coins }) {
  const { theme } = useTheme();

  const data = {
    labels: cartera?.monedas?.map((moneda) => moneda.nombre),
    datasets: [
      {
        label: "Cantidad de dinero",
        data: cartera?.monedas?.map((moneda) => moneda.precio),
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
          "rgba(255, 159, 64)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
          padding: 20,
          color: theme === "dark" ? "#fff" : "#000",
        },
      },
    },
  };

  return (
    <div
      style={{
        maxWidth: "300px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default CoinsChart;
