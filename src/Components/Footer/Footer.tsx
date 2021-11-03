import React from "react";
import FooterStyles from './Footer.module.css'

export const Footer = () => {

    return(
        <div className={FooterStyles.FooterContainer}>
            <span className={FooterStyles.footerTitleStyles}>
                Created By Dmitry Kabanov
            </span>
            <a href="mailto:kabanooovd@yandex.ru" className={FooterStyles.emailStyle}>MAIL (◔/‿\◔) ME </a>
        </div>
    )
}








