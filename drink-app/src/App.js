import React from 'react';
import Home from './pages/Home';
import Explore from './pages/Explore';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import Drink from './pages/Drink';

function App() {

  const NotFound = () => <p>404 page not found.</p>

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={'/'} component={Home} exact/>
          <Route path={'/explore'} component={Explore} exact/>
          <Route path={'/drink'} component={Drink} exact/>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
