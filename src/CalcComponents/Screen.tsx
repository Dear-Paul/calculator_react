import React from "react"
import "./Screen.css"
// import {Textfit} from "react-textfit"


type Props = {
    value: string | number,
}
function Screen ({value}:Props) {

    return (
        // <Textfit className="screen" mode="single" max={70}>
        // {value}
        // </Textfit>

        <div className="screen" style={{height: 25}}>
            {value}
        </div>
    )
}

export default Screen