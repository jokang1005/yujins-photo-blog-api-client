import React from 'react'
import { Link } from 'react-router-dom'
import { GlobalCtx } from '../App'
import {useState, useEffect} from 'react'
import axios from "axios"

const YujinNav = (props) => {

    const {gState, setGState} = React.useContext(GlobalCtx)
    const [name, setName] = useState();
    const [file, setFile] = useState();
    
    // const handleChange = (e) => {
        //     const {value} = event.target;
        //     setName(value)
        // }
        const send = event => {
            const data = new FormData()
            data.append("name", name)
            data.append("file", file)

            axios.post("http://localhost:3000/post", data).then(res => console.log(res)).catch(err => console.log(err))

        }

    return(
        <>
            <nav>
                
                <Link to="/"><h2 onClick={() => {
                    window.localStorage.removeItem("token")
                    setGState({...gState, token: null})
                }}>Logout</h2></Link>

            </nav>

           <form action="#">
               <div className = "flex">
                   <label htmlFor="name">Name</label>
                   <input 
                        type="text" 
                        id="name"
                        onChange= {(event) => {
                            const {value} = event.target;
                            setName(value)
                        }}
                        />
               </div>
               <div className="flex">
                   <label htmlFor="file">File</label>
                   <input 
                        type="file" 
                        id="file" 
                        accept=".jpg"
                        onChange={(event) => {
                            const file = event.target.files[0]
                            setFile(file)
                        }}
                            />
               </div>
           </form>
           <button onClick = {send}>Upload</button>
        </>
    )
}

export default YujinNav;