import { render } from '@testing-library/react'
import React from 'react'
import {Link} from "react-router-dom"
import {GlobalCtx} from '../App'


const Login = (props) => {
    const {gState, setGState} = React.useContext(GlobalCtx)
    const {url} = gState

    const blank = {
        username: "",
        password: ""
    }

    const [form, setForm] = React.useState(blank)

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const {username, password} = form

        fetch(`${url}/auth/login`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password})
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            window.localStorage.setItem("token", JSON.stringify(data))
            setGState({...gState, token: data.token})
            props.history.push("/")
        })
    }

    return(
        <>

           <h1>Yujin's Login Page</h1> 
           <form onSubmit={handleSubmit}>
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
                <br/>
                <input 
                    type = "submit"
                    value = "Login"
                />
                
           </form>
        </>
    )
}

export default Login;