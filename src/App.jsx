
import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import Apresentation from "./components/Apresentation";
import Galery from "./components/Galery";
import Contact from "./components/Contact";

function App() {

  return (
    <>
      <Header />
      <Apresentation logoUrl="https://github.com/TestesMeus/Motta/blob/main/LogoMotta.png?raw=true" />
      <Galery />
      <Contact />
    </>
  );
}

export default App;
