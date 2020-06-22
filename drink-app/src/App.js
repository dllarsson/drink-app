import React from 'react';
import Home from './pages/home';
import Explore from './pages/explore';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {

  const NotFound = () => <p>404 page not found.</p>

  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/home'} component={Home} exact/>
        <Route path={'/explore'} component={Explore} exact/>
        <Route component={NotFound} />
      </Switch>
      <div className="App">
      </div>
    </BrowserRouter>
  );
}

export default App;
