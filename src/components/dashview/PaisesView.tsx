export function PaisesView({ data }: { data: any }) {
  return (
    <div className="dashboard-grid">
      {data.paises.map((p: string, idx: number) => (
        <div key={idx} className="dashboard-card">
          <h3>{p}</h3>
        </div>
      ))}
    </div>
  );
}
