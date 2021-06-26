import React from 'react';
import Header from '../Header/Header';

import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <React.Fragment>
      <Header />
      <div className={classes['page-container']}>{props.children}</div>
    </React.Fragment>
  );
};

export default Layout;
