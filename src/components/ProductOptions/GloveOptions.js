import { useState, useEffect } from 'react';

import classes from './ProductOptions.module.css';

const GloveOptions = (props) => {
  const { onSizeChange } = props;
  const [size, setSize] = useState({ options: { size: '13' } });
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
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
      </select>
    </section>
  );
};

export default GloveOptions;
