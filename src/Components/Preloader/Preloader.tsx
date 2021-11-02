import React from "react";
import PreloaderStyles from './Preloader.module.css'
import {useSelector} from "react-redux";

export const Preloader = () => {


    // const loadingMode = useSelector<MainApplicationType, LoadingModesType>(state => state.commonAppData.isLoading)

    return(
        <div className={PreloaderStyles.PreloaderWrapper}>
            <h3>Loading...</h3>
            {/*{loadingMode === 'loading' && <h3>Loading...</h3>}*/}
        </div>
    )
}




