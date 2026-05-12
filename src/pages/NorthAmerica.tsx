import CasosPPaisPContinente from "../components/cards/CasosPPaisPContinente";
import Header from "../components/Header";
//@ts-ignore
import "../styles/Pages.css";
import { useNavigate } from "react-router-dom"; 
export default function NorthAmericaPage() {
  const navigate = useNavigate();

  return (
    <div className="cards-container">
      <Header />  
      <CasosPPaisPContinente continente="North America" />
      {}
    </div>
  );
}
