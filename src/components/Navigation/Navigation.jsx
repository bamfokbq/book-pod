import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/quotes'>Quotes</Link>
        </li>
        <li>
          <Link to='/bible-verse'>Bible Verse</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path='/'>
          Home component
        </Route>
        <Route path='/quotes'>Quotes component</Route>
        <Route exact path='/bible-verse'>
          Bible Verse component
        </Route>
      </Switch>
    </div>
  );
};

export default Navigation;
