import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Header from "../components/Header";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function SouthAmerica() {
  const data = {
    labels: [
      "Argentina",
      "Bolívia",
      "Brasil",
      "Chile",
      "Colômbia",
      "Equador",
      "Guiana",
      "Paraguai",
      "Peru",
      "Suriname",
      "Uruguai",
      "Venezuela",
    ],
    datasets: [
      {
        label: "Infecções COVID",
        data: [3000, 1500, 5000, 2000, 4000, 2500, 600, 1200, 2800, 500, 800, 3500],
        backgroundColor: "rgba(75,192,192,0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "Infecções por País - América do Sul" },
    },
  };

  return (
    <div>
      {/* Header fixo com botão Home */}
      <Header onHomeClick={() => (window.location.href = "/")} />

      {/* Seção principal com card marfim */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "6rem", // espaço abaixo do header
        }}
      >
        <div
          style={{
            backgroundColor: "var(--color-cinza-claro)", // defina essa cor no seu colors.css
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            maxWidth: "900px",
            width: "100%",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <h1>Infecções na América do Sul</h1>
          <Bar data={data} options={options} />
        </div>
      </section>
    </div>
  );
}