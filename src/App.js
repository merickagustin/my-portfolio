import Home from "./components/Home.js";
import Navbar from "./components/Navbar.js";
import Projects from "./components/Projects.js";
import Contacts from "./components/Contacts.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect } from "react";

function App() {
  return (
    <BrowserRouter>
      <SkeletonTheme baseColor="#415466" highlightColor="#444">
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
      </SkeletonTheme>
    </BrowserRouter>
  );
}

export default App;
