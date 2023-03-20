import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <div className="App">
      <header className="App-header sticky-top">
        <Navbar />
      </header>
      <section>
        <Home />
      </section>
    </div>
  );
}

export default App;
