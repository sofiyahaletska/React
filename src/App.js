import React from 'react';
import Header from './components/header';
import Main from "./components/main";
import Improve from "./components/improve";
import Relax from "./components/relax";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
          <BrowserRouter>
          <Header></Header>
              <Switch>
                  <Route path='/relax' component={Relax} />
                  <Route path='/improve' component={Improve} />
                  <Route path='/' component={Main} />
              </Switch>
          </BrowserRouter>
  );
}

export default App;