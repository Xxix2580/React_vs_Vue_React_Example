import React from 'react'
import './Improvements.css'

const Improvements = ({children}) => {
    return(
        <main className="improvements">
            <span className="check">✓</span>
            <span>{children}</span>
        </main>
    )
}

export default Improvements;