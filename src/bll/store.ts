import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {itemsReducer} from "./itemsReducer";

export type MainStoreType = ReturnType<typeof RootReducer>

export const RootReducer = combineReducers({
    items: itemsReducer,
})

export const store = createStore(RootReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = store