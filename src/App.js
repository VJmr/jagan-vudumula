import React, {Component} from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Experiences from './components/Experiences';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

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
