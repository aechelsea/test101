import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Skill from "./components/Skill";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Content />
        <Skill/>
        <Footer />
        
      </div>
    </>
  );
}

export default App;
