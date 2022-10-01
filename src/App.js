import "./App.css";
import { Route, Routes } from "react-router";
import NavBar from "./nav/_nav";
import Home from "./components/Home";
import Contact from "./components/contact";
function App() {
  return (
    <div>
      <div className="backgroundColor">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
