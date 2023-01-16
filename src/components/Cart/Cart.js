import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector(state => state.cart.items);
  const totalCartValue = useSelector(state => state.cart.totalValue);
  const cartDispatch = useDispatch();

  const onClearCartHandler = () => {
    cartDispatch(cartActions.clearCart());
  }
  
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          cartItems.map(item => {
            const total = item.quantity * item.price;

            return (<CartItem key={item.id} {...item} totalValue={total} />)
          })
        }
      </ul>
      {
        cartItems.length > 0 && <>
          <span>Total Value: ${totalCartValue}</span>
          <button onClick={onClearCartHandler}>Clear cart</button>
        </>
      }
    </Card>
  );
};

export default Cart;
