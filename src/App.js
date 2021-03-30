import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './pages/home'
import Detail from './pages/detail'

import { CatProvider } from './common/context/cat'



class App extends React.Component {
  render () {
    return (
      <Router>
        <CatProvider>
          <div className="Home">
            <Switch>
              <Route path="/:breed_id" component={Detail} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </CatProvider>
      </Router>
    );
  }
}

export default App;
