import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import './App.css';
function App() {
  return (
    <div className="App">
     <Navbar />
     <Intro />
     <About />
     <Contact />
    </div>
  );
}

export default App;
