import React from 'react'
import {Link} from "react-router-dom"

const Header = (props) => {

    return (
        <nav>
            <Link to="/something">Something</Link>
        </nav>
    )
}

export default Header