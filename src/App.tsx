import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SouthAmerica from "./pages/SouthAmerica";
import NorthAmerica from "./pages/NorthAmerica";

function App() {
  return (
    <><Router>
        <Routes>
          
          <Route path="/" element={<Home />} />

          <Route path="/south-america" element={<SouthAmerica />} />
          <Route path="/north-america" element={<NorthAmerica />} />
        </Routes>
      </Router></>
  );
}

export default App;