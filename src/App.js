import React, {Component} from "react";
// import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
 
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Classes from "./components/pages/Classes";
import Instructors from "./components/pages/Instructors";
import Contact from "./components/pages/Contact";
class App extends Component{
  render() { 
    return ( 
      <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/classes" component={Classes} />
            <Route exact path="/instructors" component={Instructors} />
            <Route exact path="/contact" component={Contact} />
        
         </div>
      </Router>
      );
  }
}
export default App;
