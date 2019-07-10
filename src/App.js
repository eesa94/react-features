import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import Home from './Components/Home/Home';
import FeatureOne from './Components/Features/1.FeatureOne/FeatureOne';
import FeatureTwo from './Components/Features/2.FeatureTwo/FeatureTwo';
import FeatureThree from './Components/Features/3.FeatureThree/FeatureThree';
import FeatureFour from './Components/Features/4.FeatureFour/FeatureFour';
import TemplateOne from './Components/SiteTemplates/TemplateOne';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <div className='App'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/feature-1' component={FeatureOne} />
              <Route path='/feature-2' component={FeatureTwo} />
              <Route path='/feature-3' component={FeatureThree} />
              <Route path='/feature-4' component={FeatureFour} />
              {/* <Route path="/template-1" component={TemplateOne} /> */}
            </Switch>
          </div>
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
