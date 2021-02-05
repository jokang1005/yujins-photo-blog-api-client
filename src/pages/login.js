import { render } from '@testing-library/react'
import React from 'react'
import {Link} from "react-router-dom"

const Login = (props) => {

    return(
        <>
            <h1>LET THERE BE A LOGIN FORM.... </h1>
            <Link to= "/"><button>Submit</button></Link>
        </>
    )
}

export default Login;