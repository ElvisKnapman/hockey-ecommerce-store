import SkateOptions from './SkateOptions';
import StickOptions from './StickOptions';
import HelmetOptions from './HelmetOptions';
import GloveOptions from './GloveOptions';
const ProductOptions = (props) => {
  const { onSizeChange, type } = props;

  switch (type) {
    case 'skates':
      return <SkateOptions onSizeChange={onSizeChange} />;
    case 'sticks':
      return <StickOptions onSizeChange={onSizeChange} />;

    case 'helmets':
      return <HelmetOptions onSizeChange={onSizeChange} />;

    case 'gloves':
      return <GloveOptions onSizeChange={onSizeChange} />;

    default:
      return;
  }
};

export default ProductOptions;
