import React from 'react'
import "./Header.css"

export default function Header({
    title
}) {
    return (
        <>
            <h1 title="Header" className="header">{title}</h1>
            {/* <h3  className="header" name="My Header">Hello</h3>
            <h3  className="heading" name="My Header" data-testid='Olaide'>Olaide</h3> */}
        </>
    )
}
