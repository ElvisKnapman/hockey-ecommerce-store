import { useState, useEffect } from 'react';

import classes from './ProductOptions.module.css';

const StickOptions = (props) => {
  const { onSizeChange } = props;
  const [size, setSize] = useState({ options: { flex: 75 } });
  useEffect(() => {
    onSizeChange(size);
  }, [size, onSizeChange]);
  const handleSizechange = (e) => {
    console.log({ options: { size: e.target.value } });
    setSize(e.target.value);
  };
  return (
    <section className={classes['size-options-container']}>
      <span className={classes['size-label-text']}>Flex</span>
      <select className={classes['size-options']} onChange={handleSizechange}>
        <option value="75">75</option>
        <option value="70">70</option>
        <option value="65">65</option>
      </select>
    </section>
  );
};

export default StickOptions;
