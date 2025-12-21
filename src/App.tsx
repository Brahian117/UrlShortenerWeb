import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";


export const App = () => {
      return (
    <div
      className="
        bg-blue-900
      "
    >
      <Header />

      <main className="scroll-smooth">
        <section id="hero"><Hero /></section>

      </main>

      <Footer />
    </div>
  );
};
