import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SouthAmerica from "./pages/SouthAmerica";

function App() {
  return (
    <><Router>
        <Routes>
          
          <Route path="/" element={<Home />} />

          <Route path="/south-america" element={<SouthAmerica />} />
        </Routes>
      </Router></>
  );
}

export default App;