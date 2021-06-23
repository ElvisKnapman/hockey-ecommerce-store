import classes from './Shop.module.css';

import CategoryItem from '../../components/CategoryItem/CategoryItem';

import data from '../../data/dummy-data';

const Shop = () => {
  return (
    <section className={classes['shop-list-container']}>
      {data.map((category, index) => (
        <CategoryItem
          key={index}
          title={category.title}
          image={category.image}
          path={category.path}
        />
      ))}
    </section>
  );
};

export default Shop;
