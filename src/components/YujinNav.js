import React from 'react'
import { Link } from 'react-router-dom'
import { GlobalCtx } from '../App'

const YujinNav = (props) => {

    const {gState, setGState} = React.useContext(GlobalCtx)

    //USE THIS TO POSSIBLY CHANGE THE CODING FROM CLASS TO FUNCTIONAL... BUT NOT SURE HOW YET.
    // const blank = {
    //     username: "",
    //     password: ""
    // }

    // const [form, setForm] = React.useState(blank)

    // const handleChange = (e) => {
    //     setForm({...form, [e.target.name]: e.target.value })
    // }

    return(
        <>
            <nav>
                
                <Link to="/"><h2 onClick={() => {
                    window.localStorage.removeItem("token")
                    setGState({...gState, token: null})
                }}>Logout</h2></Link>

            </nav>

            <div className="image-container">
                <div className="process">
                    <h4 className="process_heading">Process: Using Multer</h4>
                    <p className="process_details">Upload image to a node server, connected to a MongoDB database, with the help of Multer</p>
                    <input type="file" className="process_upload-btn" onChange={(e) => this.uploadImage(e, "multer")}/>
                    {/* <img src= {this.multerImage} alt= "upload-image" className="process_image"/> */}
                </div>
            </div>
        </>
    )
}

export default YujinNav;