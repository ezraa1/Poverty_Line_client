import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Toggle from "./components/Toggle/Toggle";
import { useContext } from "react";
import './App.css';
import { ThemeContext } from "./context";

function App() {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    
    <div className="App" style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white"}}>
       <Toggle />
     <Navbar />
     <Intro />
     <About />
     <Contact />
    
    </div>
  );
}

export default App;
