import React from "react";

export const UniversalButton: React.FC<{
    title: string
    width: string
    height: string
    color: string
    backgroundColor: string
    borderRadius: string
    onClick?: () => void
}> = props => {

    const {
        title,
        width,
        height,
        borderRadius,
        color,
        backgroundColor,
        onClick,
    } = props

    const StylesForUniversalButton: any = {
        width: width,
        height: height,
        borderRadius: borderRadius,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: color,
        backgroundColor: backgroundColor,
        cursor: 'pointer',
    }

    return(
        <div style={StylesForUniversalButton} onClick={onClick}>
            {title}
        </div>
    )
}

