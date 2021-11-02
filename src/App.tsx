import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {useDispatch} from "react-redux";
import {getInitialDataThunk} from "./bll/itemsReducer";
import {ItemsList} from "./Components/ItemsList/ItemsList";
import {Preloader} from "./Components/Preloader/Preloader";
import {MainWebStoreComponent} from "./Components/Main/MainWebStoreComponent";

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getInitialDataThunk)
    }, [])

    return (
        <div className="App">
            {/*<Header />*/}
            {/*<Preloader />*/}
            {/*<ItemsList />*/}
            <MainWebStoreComponent />
        </div>
    );
}

export default App;
