// src/pages/SouthAmericaPage.tsx
import CasosPPaisPContinente from "../components/cards/CasosPPaisPContinente";
import Header from "../components/Header";
//@ts-ignore
import "../styles/Pages.css";
import { useNavigate } from "react-router-dom"; // ✅ importa o hook

export default function SouthAmericaPage() {
  const navigate = useNavigate();

  return (
    <div className="cards-container">
      <Header />  
      <CasosPPaisPContinente continente="South America" />
      {/* Aqui você pode adicionar outros cards, ex: MortesPPaisPContinente */}
    </div>
  );
}
