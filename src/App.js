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
      <Element name='header' style={{   margin: '0 auto', width: '90%' }}>
        <Header />
      </Element>
      <Element name='home' style={{   margin: '0 auto', width: '90%'}}>
        <Home />
      </Element>
      <Element name='projects' style={{  margin: '0 auto', width: '90%' }}>
        <Projects />
      </Element>
      <Element name='about' style={{   margin: '0 auto', width: '90%' }}>
        <About />
      </Element>
      <Element name='footer' style={{ width: '100%' }}>
        <Footer />
      </Element>
    </div>
  );
}

export default App;
