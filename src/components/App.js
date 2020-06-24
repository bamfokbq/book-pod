import React from 'react';
import Navigation from './Navigation/Navigation';
import { Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import BibleVerse from './Bible-Verse/BibleVerse';
import Quotes from './Quotes/Quotes';

const App = () => {
  return (
    <div>
      <Navigation />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/quotes'>
          <Quotes />
        </Route>
        <Route exact path='/bible-verse'>
          <BibleVerse />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
