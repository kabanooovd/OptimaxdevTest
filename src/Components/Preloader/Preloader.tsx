import React from "react";
import PreloaderStyles from './Preloader.module.css'
import {useSelector} from "react-redux";
import {MainStoreType} from "../../bll/store";

export const Preloader = () => {

    const isLoading = useSelector<MainStoreType, boolean>(state => state.appState.isLoading)

    return(
        <div className={PreloaderStyles.PreloaderWrapper}>
            {isLoading && <h3>Loading...</h3>}
        </div>
    )
}




