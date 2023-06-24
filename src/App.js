import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import Projects from "./components/Projects.js";
import Contacts from "./components/Contacts.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header sticky-top">
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
