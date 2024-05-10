import "./App.css";

// Import Route and our components
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Currencies from "../pages/Currencies.jsx";
import Price from "../pages/Price";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/" element={<Currencies />} />
        <Route path="/" element={<Price />} />
      </Routes>
    </div>
  );
}