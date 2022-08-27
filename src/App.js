import "./App.css";
import Home from "./Components/Home";
import Favourite from "./Components/Favourite";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </div>
  );
}

export default App;
