import React from "react";
import axios from "axios";
import { useState } from "react";
import "./login.css";

const LoginFrom = ()=>{
    const [username,setUsername] = useState("")
    const [pass,setPass] = useState("")
    const [error,setError] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()
        setError("")

        try{
            const response = await axios.post("http://localhost:5000/api/login",{
                username,
                pass,
            })
            alert(response.data.message)
        }catch(error){
            setError(error.response?.data?.message || "Login Failed")
        }
    }

    return (
     <div className="loginForm">
        <form onSubmit={handleSubmit} className="loginContainer">
            <h2>Login</h2>
            {error && <p style={{color : "red"}}>{error}</p>}
            <div className="username">
                <label>Username:</label>
                <input
                type="text"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />
            </div>
            <div className="password">
                <label>Password</label>
                <input
                type="password"
                value={pass}
                onChange={(e)=>setPass(e.target.value)}
                />

            </div>
            <div>
                <button id="submit" type="submit">Login</button>
            </div>
   
        </form>
     </div>   
    )
}

export default LoginFrom;