import React, {useEffect, useState} from "react";
import s from './SelfPrintingString.module.css'


type SelfPrintingStringT = {
    word: string
    seconds: number
}
export const SelfPrintingString: React.ComponentType<SelfPrintingStringT> = props => {
    const {word, seconds} = props
    const [str, setStr] = useState<string>('')
    useEffect(() => {

            let x = setTimeout(() => {
                if (str.length === 0) {
                    setStr(str + word[0])
                }
                str.length >= 1 && str.length <= word.length - 1 && setStr(str + word[str.length])
                if (str.length === word.length) {
                    setStr('')
                }
            }, seconds * 1000)
            if (str.length === word.length) {
                clearTimeout(x)
                setTimeout( () => setStr(''), 2000 )
            }
    }, [str, word ,seconds])

    return <h1 className={s.TextStyle}>
        {str.length === word.length ? str : str + '|'}
    </h1>
}