import React from 'react';
import { Link } from 'react-router-dom';

import style from './Navigation.module.css'

const Navigation = () => {
  return (
    <div className={style.navigation}>
      <h1 className={style.logo}>BOOK-POD</h1>
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
    </div>
  );
};

export default Navigation;
