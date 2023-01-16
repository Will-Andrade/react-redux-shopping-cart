import { cartActions } from '../../store/cart';
import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';

const CartButton = (props) => {
  const cartDispatch = useDispatch();
  const amountOfCartItems = useSelector(state => state.cart.cartLength)

  const toggleCartHandler = () => {
    cartDispatch(cartActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{amountOfCartItems}</span>
    </button>
  );
};

export default CartButton;
