import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { RedirectPage } from "./pages/RedirectPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:code" element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  );
};
