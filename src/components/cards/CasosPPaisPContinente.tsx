// src/components/cards/CasosPPaisPContinente.tsx
import { useEffect, useState } from "react";
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

  useEffect(() => {
    getCovidPorContinente(continente).then((res) => {
      console.log("Resposta da API:", res); // 👀 debug
      const dados = res.dados_covid;

      // Extrair países e casos
      const paises = Object.keys(dados);
      const casos = paises.map((pais) => Number(dados[pais][0].casos));

      setLabels(paises);
      setValues(casos);
    });
  }, [continente]);

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
    plugins: {
      title: { display: true, text: `Casos por País - ${continente}` },
      legend: { display: false },
    },
  };

  return (
    <div className="card">
      <Bar data={data} options={options} />
    </div>
  );
}
