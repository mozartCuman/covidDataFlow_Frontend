import { useEffect, useState } from "react";

type DashboardProps = {
  title: string;
  fetchData: () => Promise<any>;
};

export default function Dashboard({ title, fetchData }: DashboardProps) {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData()
      .then(setData)
      .catch(err => {
        console.error("Erro ao buscar dados:", err);
        setError(err.message);
      });
  }, [fetchData]);

  if (error) return <p>Erro ao carregar {title}: {error}</p>;
  if (!data) return <p>Carregando {title}...</p>;

  return (
    <div className="dashboard">
      <h2>{title}</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
