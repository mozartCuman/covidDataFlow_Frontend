import { useEffect, useState, useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getCovidPorContinente } from "../../api/Api";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

type Props = {
  continente: string;
};

export default function CasosPPaisPContinente({ continente }: Props) {
  const [labels, setLabels] = useState<string[]>([]);
  const [values, setValues] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 480);
  const chartRef = useRef<any>(null);

  useEffect(() => {
    getCovidPorContinente(continente).then((res) => {
      const dados = res.dados_covid;
      const paises = Object.keys(dados);
      const casos = paises.map((pais) => Number(dados[pais][0].casos));
      setLabels(paises);
      setValues(casos);
    });
  }, [continente]);

  // 🔄 Atualiza responsividade ao redimensionar
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
      if (chartRef.current) {
        chartRef.current.resize();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "Número de Casos",
        data: values,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: { display: true, text: `Casos por País - ${continente}` },
      legend: { display: false },
    },
    scales: {
      x: {
        ticks: { maxRotation: 90, minRotation: 45 },
      },
      y: { beginAtZero: true },
    },
  };

  // versão compacta para mobile
  const dataCompact = {
    labels: labels.slice(0, 2).concat("Outros"),
    datasets: [
      {
        label: "Casos",
        data: values
          .slice(0, 2)
          .concat(values.slice(2).reduce((a, b) => a + b, 0)),
        backgroundColor: "rgba(75,192,192,0.6)",
      },
    ],
  };

  return (
    <div className="card">
      <div className="chart-container">
        <Bar
          ref={chartRef}
          data={isMobile ? dataCompact : data}
          options={options}
        />
      </div>
    </div>
  );
}
