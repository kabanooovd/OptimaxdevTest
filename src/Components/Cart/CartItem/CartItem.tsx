import React from "react";
import st from './CartItem.module.css'
import {apiResponseType} from "../../../dal/marketAPI";
import {Rating} from "../../common/Rating/Rating";
import {useDispatch, useSelector} from "react-redux";
import {MainStoreType} from "../../../bll/store";
import {raiseItems, reduceItems} from "../../../utils/quntityHelper";
import deleteIcon from './../../../assets/delete.png'
import {switchRmFlag} from "../../../bll/cartsReducer";
import {ConfirmComponent} from "../../common/ConfirmComponent/ConfirmComponent";

export const CartItem: React.FC<{cartData: apiResponseType & { quantity: number, rmFlag: boolean }}> = (props) => {

    const {cartData} = props

    const dispatch = useDispatch()

    const quantity = useSelector<MainStoreType, Array<apiResponseType & { quantity: number }>>
    (state => state.cart.cartData).find(el => el.id === cartData.id)

    const paymentFlag = useSelector<MainStoreType, boolean>(state => state.appState.paymentFlag)

    const currentQuantity = quantity && quantity.quantity

    const cartItemsQuantity = useSelector<MainStoreType, number>(state => state.cart.cartItemsQuantity)

    const raiseQuantity = () => currentQuantity && raiseItems(currentQuantity, cartData.id, cartItemsQuantity, dispatch)

    const reduceQuantity = () => currentQuantity && reduceItems(dispatch, currentQuantity, cartData.id, cartItemsQuantity)

    const removeItemHandler = () => dispatch(switchRmFlag(true, cartData.id))

    const reduceButtonStyles = cartData.quantity > 1 ? st.arrowStyles : st.disabledArrow

    const removeCartItemStyles = !paymentFlag ? st.rmImageWrapper : st.rmImageWrapperDisabled

    return (
        <div className={st.cartItemWrapper}>
            <div className={st.cartItemPicWrapper}>
                <img src={cartData.image} alt="" className={st.itemPic}/>
            </div>
            <div className={st.cartItemDataStyles} style={{position: 'relative'}}>
                <div className={st.cartOptions}>
                    <h3>{cartData.price} $</h3>
                    <div style={{position: 'relative'}}>
                        {cartData.rmFlag && <ConfirmComponent userID={cartData.id} title={'Are you sure?'}/>}
                        <div className={removeCartItemStyles} onClick={removeItemHandler}>
                            <img src={deleteIcon} alt="" className={st.rmImageStyle}/>
                        </div>
                    </div>
                </div>
                <div className={st.cartTitle}>
                    {cartData.title}
                </div>
                <div className={st.cartQuantity}>
                    <div className={st.arrowStyles} onClick={raiseQuantity}>&#9650;</div>
                    {cartData.quantity} {cartData.quantity > 1 ? <span> - items</span> : <span> - item</span>}
                    <div className={reduceButtonStyles} onClick={reduceQuantity}>&#9660;</div>
                </div>
                <div className={st.cartCategory}>
                    {cartData.category}
                </div>
                <div className={st.cartRating}>
                    <Rating rate={cartData.rating.rate}/>
                </div>
                <div className={st.cartDescription}>
                    <h4 className={st.descriptionHeaderSt}>Description: </h4>
                    {cartData.description}
                </div>
            </div>

        </div>
    )
}

