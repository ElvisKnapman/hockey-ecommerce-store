// import React from 'react'

import classes from './CategoryItem.module.css';

const CategoryItem = (props) => {
  return (
    <div
      className={classes['category-item']}
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(0,0,0,.5), rgba(0,0,0,.1)',
      }}>
      <img
        className={classes['category-image']}
        src={props.image}
        alt={props?.imgAlt}
      />
      <span className={classes.title}>{props.title}</span>
    </div>
  );
};

export default CategoryItem;
