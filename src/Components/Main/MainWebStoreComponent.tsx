import React from "react";
import {Header} from "../Header/Header";
import {Preloader} from "../Preloader/Preloader";
import {Routes} from "../Routes/Routes";
import {Footer} from "../Footer/Footer";

export const MainWebStoreComponent = () => {

    return(
        <>
            <Header />
            <Preloader />
            <Routes />
            <Footer />
        </>
    )
}