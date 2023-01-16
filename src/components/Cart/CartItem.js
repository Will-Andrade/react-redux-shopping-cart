import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import classes from './CartItem.module.css';

const CartItem = ({ id, title, quantity, totalValue, price }) => {
  const cartDispatch = useDispatch();

  const onRemoveProductHandler = () => {
    cartDispatch(cartActions.removeFromCart({ id, price, quantity }));
  };

  const onAddProductHandler = () => {
    cartDispatch(cartActions.addToCart({
      id,
      title,
      price,
      quantity
    }));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalValue.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={onRemoveProductHandler}>-</button>
          <button onClick={onAddProductHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
