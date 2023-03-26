import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import Projects from "./components/Projects.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header sticky-top">
          <Navbar />
        </header>
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
