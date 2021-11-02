import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {itemsReducer} from "./itemsReducer";
import {appCommonDataReducer} from "./app-common-data-reducer";
import {cartsReducer} from "./cartsReducer";

export type MainStoreType = ReturnType<typeof RootReducer>

export const RootReducer = combineReducers({
    items: itemsReducer,
    appState: appCommonDataReducer,
    carts: cartsReducer,
})

export const store = createStore(RootReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = store