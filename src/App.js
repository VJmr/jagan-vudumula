import React, {Component} from 'react';
import Header from './sections/Header';
import About from './sections/About';
import Contact from './sections/Contact';
import Experiences from './sections/Experiences';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Footer from './sections/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Header></Header>
        <main className="main-container">
          <Home></Home>
          <About></About>
          <Skills></Skills>
          <Experiences></Experiences>
          <Projects></Projects>
          <Contact></Contact>
        </main>
        <Footer></Footer>
      </div>
    )
  }
}

export default App;
