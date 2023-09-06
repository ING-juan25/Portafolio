import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Sidenav from "./components/Sidenav";


function App() {
  return (
    <main>
      <Sidenav />
      <Home />
      <About />
    </main>
  );
}

export default App;
