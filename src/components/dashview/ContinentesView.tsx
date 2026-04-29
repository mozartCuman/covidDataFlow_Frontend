
export function ContinentesView({ data }: { data: any }) {
  return (
    <div className="dashboard-grid">
      {data.continentes.filter((c: string) => c).map((c: string, idx: number) => (
        <div key={idx} className="dashboard-card">
          <h3>{c}</h3>
        </div>
      ))}
    </div>
  );
}
