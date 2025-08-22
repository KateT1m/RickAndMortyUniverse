import { Route, Routes } from "react-router";
import MainPage from "./pages/MainPage/MainPage";
import { CharacterPage } from "./pages/CharacterPage/CharacterPage";

export const App: React.FC = () => {

  return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
      </Routes>
  );
};

