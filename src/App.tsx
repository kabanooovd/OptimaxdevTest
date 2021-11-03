import React, {useEffect} from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import {getInitialDataThunk} from "./bll/itemsReducer";
import {MainWebStoreComponent} from "./Components/Main/MainWebStoreComponent";



function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getInitialDataThunk)
    }, [dispatch])

    return (
        <div className="App">
            <MainWebStoreComponent />
        </div>
    );
}

export default App;
