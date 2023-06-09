import styles from "./styles";
import "./App.css";
import BestChoice from "./components/BestChoice";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ExpertOpn from "./components/ExpertOpn";
import Support from "./components/Support";
import Calculate from "./components/Calculate";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className={`${styles.paddings} relative w-full inset-0 `}>
        <Hero />
        <BestChoice />
        <ExpertOpn />
        <Support />
        <Calculate />
      </div>
      <Footer />
    </>
  );
}

export default App;
