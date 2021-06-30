import React ,{ Component } from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Topnavbar from './components/TopNavbar/Topnavbar';
import Slideshow from './components/sildeshow/Slideshow';
import AboutPNL from './components/AboutPNL/AboutPNL';
import FooterPNL from './components/footerPNL/footerPNL';
import MenuPNL from "./components/MenuPNL/menuPNL";
import Tortillas from "./components/Tortillas/Tortillas";
import Sweets from "./components/Sweets/Sweets";
import ContactUs from "./components/ContactUs/ContactUs";

class App extends Component {
  render () {
    return (
      <Router>
        <div className='App' >
          <Route path="/" component={Topnavbar} />


          <Route path="/" exact component={Slideshow}  />
          <Route path="/" exact component={AboutPNL} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/Menu" component={MenuPNL} />
          <Route path="/Tortillas" component={Tortillas} />
          <Route path="/Sweets" component={Sweets} />

          
          <Route path="/" component={FooterPNL} />
        </div>
      </Router>
    );
  }
}

export default App;
