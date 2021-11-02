import {apiResponseType} from "../dal/marketAPI";

const SET_NAW_ITEM = 'carts/SET_NAW_ITEM'
const RAISE_ITEMS_QUANTITY = 'carts/RAISE_ITEMS_QUANTITY'


export type CartsReducerTypes = {
    cartData: Array<apiResponseType & {quantity: number}>
}

const initState = {
    cartData: []
}

export const cartsReducer = (state: CartsReducerTypes = initState, action: CartsActionsType): CartsReducerTypes => {
    switch (action.type) {
        case SET_NAW_ITEM:
            return {...state, cartData: [{...action.item, quantity: action.quantity}, ...state.cartData]}
        case RAISE_ITEMS_QUANTITY:
            return {...state, cartData: state.cartData
                    .map(el => el.id === action.itemID
                        ? {...el, quantity: action.quantity}
                        : el)}
        default: return state
    }
}

export type RaiseItemsQuantity_T = ReturnType<typeof raiseItemsQuantity>
export const raiseItemsQuantity = (quantity: number, itemID: number) => {
    return {type: RAISE_ITEMS_QUANTITY, quantity, itemID} as const
}

export type SetNewItem_T = ReturnType<typeof setNewItem>
export const setNewItem = (item: apiResponseType, quantity: number) => {
    return {type: SET_NAW_ITEM, item, quantity} as const
}

type CartsActionsType = SetNewItem_T | RaiseItemsQuantity_T