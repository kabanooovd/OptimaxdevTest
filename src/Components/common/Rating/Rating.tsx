import React from "react";

export const Rating: React.FC<{ rate: number }> = props => {

    const {rate} = props

    //let rate = 3.8;

    let currentRating = Math.ceil(rate)

    const x = <>&#11088;</>

    let arr = []

    for (let i = 0; i < currentRating; i++) {
        arr.push(x)
    }

    const mappedRating = arr.map(el => (
        <span>{el}</span>
    ))

    return(
        <div>
            {mappedRating}
        </div>
    )
}




