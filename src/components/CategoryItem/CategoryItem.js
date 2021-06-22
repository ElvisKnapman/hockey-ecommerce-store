import classes from './CategoryItem.module.css';

const CategoryItem = (props) => {
  return (
    <div className={classes['category-item']}>
      <img className={classes['category-image']} src={props.image} alt="" />
      <div className={classes.overlay} />
      <span className={classes.title}>{props.title}</span>
    </div>
  );
};

export default CategoryItem;
