import { useEffect, useState } from "react";
import Article from "../components/Article";
import Summary from "../components/Summary";
import Header from "../components/Header";

export default function App() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToHome = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div>
      {/* Seção de apresentação */}
      <section
        onClick={goToHome}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",   // organiza em coluna
          justifyContent: "center",  // centraliza verticalmente
          alignItems: "center",      // centraliza horizontalmente
          gap: "2rem",               // espaço entre balão e card
          cursor: "pointer",
        }}
      >
        {/* Balão de instrução flexível acima */}
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
            color: "#fff",
            padding: "12px 24px",
            borderRadius: "10px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Clique ou role para continuar
        </div>

        {/* Card cinza claro envolvendo o Article */}
        <div
          style={{
            backgroundColor: "var(--color-cinza-claro)",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            maxWidth: "900px",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <Article />
        </div>
      </section>

      {/* Seção Home */}
      <section style={{ minHeight: "100vh" }}>
        {/* Header animado, fixo e largura total */}
        <div
          style={{
            width: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            opacity: showHeader ? 1 : 0,
            transform: showHeader ? "translateY(0)" : "translateY(-20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
            zIndex: 1000,
          }}
        >
          <Header onHomeClick={goToHome} />
        </div>

        {/* Card cinza claro envolvendo TODAS as informações da Home */}
        <div
          style={{
            backgroundColor: "var(--color-cinza-claro)",
            padding: "2rem",
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            marginTop: "100px",
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingBottom: "6rem", // espaço extra para o conteúdo
          }}
        >
          <Summary />
        </div>
      </section>
    </div>
  );
}