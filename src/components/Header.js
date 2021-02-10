import React from 'react'
import {Link} from "react-router-dom"

const Header = (props) => {

    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/works">Works</Link>
            <Link to="/about">About</Link>
            <Link to="/getintouch">Get in touch</Link>
        </nav>
    )
}

export default Header