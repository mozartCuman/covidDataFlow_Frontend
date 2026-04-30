// src/pages/SouthAmericaPage.tsx
import Dashboard from "../components/Dashboard";
import { getPaisesPorContinente } from "../api/Api";

export default function SouthAmericaPage() {
  return (
    <Dashboard
      title="Casos por País - América do Sul"
      fetchData={() => getPaisesPorContinente("South America")}
    />
  );
}
