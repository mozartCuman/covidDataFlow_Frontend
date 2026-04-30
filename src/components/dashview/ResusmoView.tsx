export function ResumoView({ data }: { data: any }) {
  return (
    <div className="dashboard-grid">
      <div className="dashboard-card">
        <p>Casos</p>
        <h3>{data.cases}</h3>
      </div>
      <div className="dashboard-card">
        <p>Mortes</p>
        <h3>{data.deaths}</h3>
      </div>
      <div className="dashboard-card">
        <p>Recuperados</p>
        <h3>{data.recovered}</h3>
      </div>
    </div>
  );
}
