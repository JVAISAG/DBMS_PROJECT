import React from "react";
import axios from "axios";
import { useState } from "react";
import "./login.css";

const LoginFrom = ()=>{
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [userType,setUserType] = useState("")
    const [error,setError] = useState("")

    const handleSubmit = async(e) => {
        e.preventDefault()
        setError("")

        try{
            const response = await axios.post("http://localhost:5000/api/login",{
                email,
                password,
                userType
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
            <div className="select">
                <select name="selection" value={userType} onChange={(e)=>
                    {
                        setUserType(e.target.value)
                    }
                }>  
                    <option value="">default</option>
                    <option value="student">Student</option>
                    <option value="company">Company</option>
                </select>
            </div>
            <div className="username">
                <label>Email:</label>
                <input
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className="password">
                <label>Password</label>
                <input
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
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