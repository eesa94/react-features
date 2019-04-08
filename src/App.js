import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import PathOne from './Components/Paths/PathOne';
import PathTwo from './Components/Paths/PathTwo';



class App extends Component {
    render() {
      return (
        <BrowserRouter>
          <div className="App">
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/pathone" component={PathOne} />
              <Route path="/pathtwo" component={PathTwo} />
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
}

export default App;
