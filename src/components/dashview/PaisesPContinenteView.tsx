export function PaisesPContinenteView({ data }: { data: any }) {
  return (
    <div>
      <h3>{data.continente}</h3>
      <div className="dashboard-grid">
        {data.paises.map((p: any, idx: number) => (
          <div key={idx} className="dashboard-card">
            <h3>{p.nome}</h3>
            <p>Casos: {p.cases}</p>
            <p>Mortes: {p.deaths}</p>
            <p>Recuperados: {p.recovered}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
