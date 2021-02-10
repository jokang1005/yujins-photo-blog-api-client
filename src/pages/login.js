import { render } from '@testing-library/react'
import React from 'react'
import {Link} from "react-router-dom"
import {GlobalCtx} from '../App'
import Header from '../components/Header'

const Login = (props) => {
    const {gState, setGState} = React.useContext(GlobalCtx)
    const {url} = gState

    const [form, setForm] = React.useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value })
    }

    return(
        <>

           <h1>Yujin's Login Page</h1> 
           <form>
               <h1>Hey Yujin McPoojin</h1>
               <h2>Sign in here!</h2>
               <input
                    type = "text"
                    placeholder = "username"
                    value = {form.username}
                    name = "username"

                    onChange = {handleChange}
                />
                <h2>Password please</h2>
                <input
                    type = "password"
                    placeholder = "password"
                    value = {form.password}
                    name = "password"
                    onChange = {handleChange}
                />
                <input 
                    type = "submit"
                    value = "submit"
                />
                
           </form>
        </>
    )
}

export default Login;