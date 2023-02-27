import MainPage from "./pages/MainPage/MainPage";
import MoviePage from "./pages/MoviePage/MoviePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
