import classes from './CartButton.module.css';
import { uiSliceAction } from '../../store/ui-slice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';




const CartButton = (props) => {

  const dispatch = useDispatch();

  const totalQuantity = useSelector(state => state.cartUi.totalQuantity)

  const onClickHandler = () => {
    dispatch(uiSliceAction.toggle());
  }
  return (
    <button className={classes.button} onClick={onClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
