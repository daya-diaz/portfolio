import { Element } from 'react-scroll';

import './App.css';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App app-container">
      <Element name='header' style={{ margin: '0 auto' }}>
        <Header />
      </Element>
      <Element name='home' style={{ margin: '0 auto' }}>
        <Home />
      </Element>
      <Element name='projects' style={{ margin: '0 auto' }}>
        <Projects />
      </Element>
      <Element name='about' style={{ margin: '0 auto' }}>
        <About />
      </Element>
      <Element name='footer'>
        <Footer />
      </Element>
    </div>
  );
}

export default App;
