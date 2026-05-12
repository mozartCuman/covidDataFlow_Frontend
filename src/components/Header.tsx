import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 20px",
          backgroundColor: "var(--color-marfin)",
          color: "var(--color-chumbo)",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        }}
      >
        {/* Botão hamburguer animado */}
        <button
          className={`menu-button ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Links e pesquisa visíveis em desktop */}
        <nav className="desktop-nav">
          <Link to="/">Home</Link>
          <Link to="/south-america">América do Sul</Link>
          <Link to="/north-america">América do Norte</Link>
          <input type="text" placeholder="Pesquisar..." />
        </nav>
      </header>

      {/* Menu lateral mobile */}
      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>🏠 Home</Link>
        <Link to="/south-america" onClick={() => setMenuOpen(false)}>🌎 América do Sul</Link>
        <Link to="/north-america" onClick={() => setMenuOpen(false)}>🌎 América do Norte</Link>
      </nav>
    </>
  );
}
