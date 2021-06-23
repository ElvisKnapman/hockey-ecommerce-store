import { useState, useEffect } from 'react';

import classes from './ProductOptions.module.css';

const HelmetOptions = (props) => {
  const { onSizeChange } = props;
  const [size, setSize] = useState({ options: { size: 'S' } });
  useEffect(() => {
    onSizeChange(size);
  }, [size, onSizeChange]);
  const handleSizechange = (e) => {
    console.log({ options: { size: e.target.value } });
    setSize(e.target.value);
  };
  return (
    <section className={classes['size-options-container']}>
      <span className={classes['size-label-text']}>Size</span>
      <select className={classes['size-options']} onChange={handleSizechange}>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
      </select>
    </section>
  );
};

export default HelmetOptions;
