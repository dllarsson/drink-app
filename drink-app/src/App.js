import React from 'react';
import Home from './pages/home';
import Explore from './pages/explore';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.css';

function App() {

  const NotFound = () => <p>404 page not found.</p>

  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} component={Home} exact/>
        <Route path={'/explore'} component={Explore} exact/>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
