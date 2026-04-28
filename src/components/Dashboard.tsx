// src/components/Dashboard.tsx
import { useEffect, useState } from "react";

type DashboardProps = {
  title: string;
  fetchData: () => Promise<any>; // função de API passada como prop
};

export default function Dashboard({ title, fetchData }: DashboardProps) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchData().then(setData);
  }, [fetchData]);

  if (!data) return <p>Carregando {title}...</p>;

  return (
    <div className="dashboard">
      <h2>{title}</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
