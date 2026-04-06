import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Registrar os componentes necessários
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Summary() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Casos COVID",
        data: [100, 200, 150, 300],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.3, // suaviza a linha
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // evita conflito de canvas
  };

  return (
    <div style={{ height: "400px" }}>
      <h2>Resumo da Situação</h2>
      <p>Este gráfico mostra a evolução dos casos registrados.</p>
      <Line data={data} options={options} />
    </div>
  );
}