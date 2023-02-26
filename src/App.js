import "./App.css";
import "./index.scss";
import LandingPage from "./pages/LandingPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
