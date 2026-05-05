import { Link } from "react-router-dom";

export default function Header() {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: "transparent",
    color: "var(--color-chumbo)",
    border: "none",
    padding: "6px 14px",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    minWidth: "110px",
    textAlign: "center",
    fontSize: "14px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "12px",
        padding: "6px 14px",
        backgroundColor: "var(--color-marfin)",
        color: "var(--color-chumbo)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      {/* Botão Home como Link */}
      <Link
        to="/"
        style={{ ...buttonStyle, textDecoration: "none" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow = "0 3px 5px rgba(0,0,0,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        Home
      </Link>

      {/* Link para América do Sul */}
      <Link
        to="/south-america"
        style={{ ...buttonStyle, textDecoration: "none" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow = "0 3px 5px rgba(0,0,0,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        América do Sul
      </Link>

      {/* Barra de pesquisa */}
      <input
        type="text"
        placeholder="Pesquisar..."
        style={{
          flex: 1,
          marginLeft: "15px",
          padding: "6px",
          borderRadius: "4px",
          border: "none",
          color: "var(--color-chumbo)",
          backgroundColor: "transparent",
          fontSize: "14px",
        }}
      />
    </header>
  );
}
