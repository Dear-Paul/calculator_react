import React from "react"
import "./ButtonBox.css"

type Prop = {
    children: React.ReactNode
}

function ButtonBox ({children}: Prop) {
    return (
        <div className="buttonBox">
        {children}
        </div>
    )
}

export default ButtonBox