import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import StripeCheckout from 'react-stripe-checkout';

import { cartActions } from '../../store/reducers/cart-slice';

const StripeCheckoutButton = () => {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const history = useHistory();

  // convert price to cents for Stripe
  const priceForStripe = Number(totalPrice) * 100;
  const publishableKey =
    'pk_test_51IVO5qL1pp3nwms65H8Kj5yz6haia1EOYLDc0HsZl3LBi4j5kHKRUd1aCjHdq0rQMjlg2ZAcJnSdD6IxxIKwyaS300bWCAao5x';

  const onToken = (token) => {
    // clear cart on successful payment and redirect back to store main
    dispatch(cartActions.paymentSuccess());
    history.replace('/');
  };

  console.log(history);
  return (
    <StripeCheckout
      label="Checkout Now"
      name="Elvis' Hockey Shop"
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${totalPrice}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
