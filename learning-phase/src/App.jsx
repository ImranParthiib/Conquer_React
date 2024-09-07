import "./App.css";
import Community from "./components/Community";
import Carousel from "./components/Corousal";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/main";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Carousel />
      <Community quantity="Millions" />
      <Footer />
    </>
  );
}

export default App;
