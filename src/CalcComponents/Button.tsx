import React, { MouseEventHandler } from "react"
import "./Button.css"


type Props = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>)=> void,
    value: string | number,
    className: string,
}
function Button ({className, value, onClick}: Props) {
    return (
        <>
           <button className={className} onClick={e => onClick(e)}>
               {value}
           </button>
            
        </>
    )
}

export default Button