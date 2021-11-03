import React from "react";

export const Rating: React.FC<{ rate: number }> = props => {
    const {rate} = props
    const RatingStar = <>&#11088;</>

    let currentRating = Math.ceil(rate)
    let arr = []
    for (let i = 0; i < currentRating; i++) arr.push(RatingStar)

    return(
        <div>
            {arr.map((el, index) => <span key={index}>{el}</span>)}
        </div>
    )
}




