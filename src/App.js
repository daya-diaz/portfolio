import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App app-container">
      <Header />
      <Home />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
