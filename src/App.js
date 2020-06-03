import React from 'react';
import Header from './components/header';
import Main from "./components/main";
import Improve from "./components/improve";
import Relax from "./components/relax";
import Exercises from "./components/exercises";
import bookAdviser from "./components/book_adviser";
import comicsReader from "./components/comics_reader/comicsReader";
import gameAdviser from "./components/game_adviser";
import Karaoke from "./components/karaoke";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import configStore from './store';

const store = configStore();

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
          <Header> </Header>
              <Switch>
                  <Route path='/articulation_exercises' component={Exercises}/>
                  <Route path='/book_adviser' component={bookAdviser}/>
                  <Route path='/comics_reader' component={comicsReader}/>
                  <Route path='/game_adviser' component={gameAdviser}/>
                  <Route path='/karaoke' component={Karaoke}/>
                  <Route path='/relax' component={Relax} />
                  <Route path='/improve' component={Improve} />
                  <Route path='/' component={Main} />
              </Switch>
          </BrowserRouter>
          </Provider>
  );
}

export default App;