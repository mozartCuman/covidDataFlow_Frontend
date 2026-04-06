import { Link } from "react-router-dom";

type HeaderProps = {
  onHomeClick: () => void;
};

export default function Header({ onHomeClick }: HeaderProps) {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: "transparent",       // transparente
    color: "var(--color-chumbo)",         // texto chumbo
    border: "none",                       // sem borda
    padding: "6px 14px",                  // mais fino ainda
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    minWidth: "110px",                    // largura mínima igual
    textAlign: "center",
    fontSize: "14px",                     // fonte menor
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "12px",
        padding: "6px 14px",               // header mais fino
        backgroundColor: "var(--color-marfin)", // fundo marfim
        color: "var(--color-chumbo)",           // texto chumbo
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      {/* Botão Home */}
      <button
        onClick={onHomeClick}
        style={buttonStyle}
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
      </button>

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
          padding: "6px",                   // mais fino
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