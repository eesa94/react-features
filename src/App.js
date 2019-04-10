import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import PathOne from './Components/Paths/PathOne';
import PathTwo from './Components/Paths/PathTwo';
import FeatureOne from './Components/Features/FeatureOne/FeatureOne';
import FeatureTwo from './Components/Features/FeatureTwo/FeatureTwo';



class App extends Component {
    render() {
      return (
        <BrowserRouter>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/pathone" component={PathOne} />
              <Route path="/pathtwo" component={PathTwo} />
              <Route path="/feature-1" component={FeatureOne} />
              <Route path="/feature-2" component={FeatureTwo} />
            </Switch>
          </div>
        </BrowserRouter>
      );
    }
}

export default App;
