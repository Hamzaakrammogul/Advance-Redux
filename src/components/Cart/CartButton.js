import classes from './CartButton.module.css';
import uiSliceAction from '../../store/ui-slice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import store from '../../store';




const CartButton = (props) => {
  const dispatch = useDispatch();


const onClickHandler= ()=>{
  dispatch(uiSliceAction.toggle());
}
  return (
    <button className={classes.button} onClick={onClickHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
