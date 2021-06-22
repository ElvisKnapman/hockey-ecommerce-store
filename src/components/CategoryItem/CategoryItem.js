import { Link } from 'react-router-dom';
import classes from './CategoryItem.module.css';

const CategoryItem = (props) => {
  return (
    <Link to={props.path}>
      <div className={classes['category-item']}>
        <img className={classes['category-image']} src={props.image} alt="" />
        <div className={classes.overlay} />
        <span className={classes.title}>{props.title}</span>
      </div>
    </Link>
  );
};

export default CategoryItem;
