import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/footer';
import './App.css';

 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Header />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/services" component={Services}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
           </Switch>
          <Footer />
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;