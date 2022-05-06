import React from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton'

const Header =()=>{
  return(
    <nav className={classes.header}>
      <h1>ASCII Store</h1>
      <HeaderCartButton/>
    </nav>

  )
}

export default Header;
