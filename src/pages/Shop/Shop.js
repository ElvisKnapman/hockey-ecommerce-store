import classes from './Shop.module.css';

const Shop = () => {
  return (
    <section className={classes['shop-list-container']}>
      <div className={classes['category-item']}>Sticks</div>
      <div className={classes['category-item']}>Helmets</div>
      <div className={classes['category-item']}>Gloves</div>
      <div className={classes['category-item']}>Skates</div>
    </section>
  );
};

export default Shop;
