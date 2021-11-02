import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {useDispatch} from "react-redux";
import {getInitialDataThunk} from "./bll/itemsReducer";
import {ItemsList} from "./Components/ItemsList/ItemsList";
import {Preloader} from "./Components/Preloader/Preloader";

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getInitialDataThunk)
    }, [])

    return (
        <div className="App">
            <Header />
            <Preloader />
            <ItemsList />
        </div>
    );
}

export default App;
