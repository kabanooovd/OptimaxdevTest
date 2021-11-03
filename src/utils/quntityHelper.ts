import {Dispatch} from "redux";
import {changeItemsQuantity, removeInstance, setCurrentCartQuantity,} from "../bll/cartsReducer";
import {setCartFlag} from "../bll/itemsReducer";

export const raiseItems = (currentQuantity: number, id: number, cartItemsQuantity: number , dispatch: Dispatch,) => {
    dispatch(changeItemsQuantity(currentQuantity + 1, id))
    dispatch(setCurrentCartQuantity(cartItemsQuantity + 1))
}



export const reduceItems = (dispatch: Dispatch, currentQuantity: number, id: number, cartItemsQuantity: number ,) => {
    dispatch(changeItemsQuantity(currentQuantity - 1, id))
    dispatch(setCurrentCartQuantity(cartItemsQuantity - 1))
    if (currentQuantity === 1) {
        dispatch(setCartFlag(false, id))
        dispatch(removeInstance(id))
    }
}



