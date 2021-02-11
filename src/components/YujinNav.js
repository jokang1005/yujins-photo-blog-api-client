import React from 'react'
import { Link } from 'react-router-dom'
import { GlobalCtx } from '../App'

const YujinNav = (props) => {

    const {gState, setGState} = React.useContext(GlobalCtx)



    return(
        <nav>
            <Link to="/"><h2 onClick={() => {
                window.localStorage.removeItem("token")
                setGState({...gState, token: null})
            }}>Logout</h2></Link>
        </nav>
    )
}

export default YujinNav;