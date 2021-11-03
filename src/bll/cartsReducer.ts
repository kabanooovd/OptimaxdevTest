import {apiResponseType} from "../dal/marketAPI";

const SET_NAW_ITEM = 'carts/SET_NAW_ITEM'
const RAISE_ITEMS_QUANTITY = 'carts/RAISE_ITEMS_QUANTITY'
const REMOVE_ITEM_FROM_CARD = 'carts/REMOVE_ITEM_FROM_CARD'
const SET_ALL_CART_QUANTITY = 'carts/SET_ALL_CART_QUANTITY'
const SWITCH_RM_FLAG = 'carts/SWITCH_RM_FLAG'


export type CartsReducerTypes = {
    cartData: Array<apiResponseType & {quantity: number, rmFlag: boolean}>
    cartItemsQuantity: number
}

const initState = {
    cartData: [],
    cartItemsQuantity: 0
}

export const cartsReducer = (state: CartsReducerTypes = initState, action: CartsActionsType): CartsReducerTypes => {
    switch (action.type) {
        case SET_NAW_ITEM:
            return {
                ...state,
                cartData: [{...action.item, quantity: action.quantity, rmFlag: false}, ...state.cartData]
            }
        case RAISE_ITEMS_QUANTITY:
            return {...state, cartData: state.cartData
                    .map(el => el.id === action.itemID
                        ? {...el, quantity: action.quantity}
                        : el)}
        case REMOVE_ITEM_FROM_CARD:
            return {...state, cartData: state.cartData.filter(el => el.id !== action.itemID)}
        case SET_ALL_CART_QUANTITY:
            return {...state, cartItemsQuantity: action.currentValue}
        case SWITCH_RM_FLAG:
            return {...state, cartData: state.cartData
                    .map(el => el.id === action.id ? {...el, rmFlag: action.rmFlag} : el)}
        default: return state
    }
}

export type SwitchRmFlag_T = ReturnType<typeof switchRmFlag>
export const switchRmFlag = (rmFlag: boolean, id: number) => {
    return {type: SWITCH_RM_FLAG, rmFlag, id} as const
}

export type SetCurrentCartQuantity_T = ReturnType<typeof setCurrentCartQuantity>
export const setCurrentCartQuantity = (currentValue: number) => {
    return {type: SET_ALL_CART_QUANTITY, currentValue} as const
}

export type RemoveInstance_T = ReturnType<typeof removeInstance>
export const removeInstance = (itemID: number) => {
    return {type: REMOVE_ITEM_FROM_CARD, itemID} as const
}

export type ChangeItemsQuantity_T = ReturnType<typeof changeItemsQuantity>
export const changeItemsQuantity = (quantity: number, itemID: number) => {
    return {type: RAISE_ITEMS_QUANTITY, quantity, itemID} as const
}

export type SetNewItem_T = ReturnType<typeof setNewItem>
export const setNewItem = (item: apiResponseType, quantity: number) => {
    return {type: SET_NAW_ITEM, item, quantity} as const
}

type CartsActionsType = SetNewItem_T
    | ChangeItemsQuantity_T
    | RemoveInstance_T
    | SetCurrentCartQuantity_T
    | SwitchRmFlag_T