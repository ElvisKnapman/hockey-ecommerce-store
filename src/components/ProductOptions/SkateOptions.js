import classes from './ProductOptions.module.css';
import { useEffect, useState } from 'react';

const SkateOptions = (props) => {
  const { onSizeChange } = props;
  const [size, setSize] = useState({ options: { size: '7' } });
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
        <option value="7">7</option>
        <option value="7.5">7.5</option>
        <option value="8">8</option>
        <option value="8.5">8.5</option>
        <option value="9">9</option>
        <option value="9.5">9.5</option>
        <option value="10">10</option>
        <option value="10.5">10.5</option>
        <option value="11">11</option>
        <option value="11.5">11.5</option>
        <option value="12">12</option>
      </select>
    </section>
  );
};

export default SkateOptions;
