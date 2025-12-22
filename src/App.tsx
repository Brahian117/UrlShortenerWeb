import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { RedirectPage } from "./pages/RedirectPage";
import { wakeUpDb } from "./services/wakeupService";
export const App = () => {
    useEffect(() => {
    wakeUpDb();
  }, []);

  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:code" element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  );
};
