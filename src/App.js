import React from 'react';

// routing
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';

// styles
import {GlobalStyle} from './GlobalStyle';

// components
import Header from './components/Header';
import Home from './components/Home'
import Movie from './components/Movie';
import NotFound from './components/NotFound';

const App = () => {
    return (
      <Router>
        <Header/>
          <Switch>
            <Route path="/:movieId"><Movie/></Route>
            <Route path="/"><Home/></Route>
            <Route path="/*"><NotFound/></Route>
          </Switch>
        <GlobalStyle/>
      </Router>
    );
};

export default App;
