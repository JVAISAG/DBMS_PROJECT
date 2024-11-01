import React, { useState } from 'react';
import axios from 'axios';
import "./Registration.css"

const RegisterStudent = () => {
  const [emailID, setEmailID] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/registers', {
        EmailID: emailID,
        PhoneNo: phoneNo,
        PinCode: pinCode,
        Password: password,
        FirstName: firstName,
        LastName: lastName,
        DOB: dob,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error registering user');
    }
  };

  return (
    <div className="registration-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="emailID">Email:</label>
          <input
            type="email"
            id="emailID"
            value={emailID}
            onChange={(e) => setEmailID(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo">Phone Number:</label>
          <input
            type="text"
            id="phoneNo"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pinCode">Pin Code:</label>
          <input
            type="text"
            id="pinCode"
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Register</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};


const RegisterCompany = () =>{
  const [companyName,setCompanyName] = useState('');
  const [emailID,setEmailID] = useState('');
  const [password,setPassword] = useState('');
  const [message,setMessage] = useState('');
  
  const handleSubmit = async (e) =>{
      e.preventDefault();
  
      try{
          const response = await axios.post("http://localhost:5000/api/registerc",{
             CompanyName: companyName,
              EmailID: emailID,
              Password : password
          }
        )
          setMessage(response.data.message)
  
      }
      catch(error){
          setMessage("Error Registering user")
      }
  }
  return(
      <div className="Container">
          <form className="registration-form" onSubmit={handleSubmit}>
  
          <div className="companyName">
              <label>Company Name:</label>
              <input
               type="text"
               value={companyName}
               onChange={(e)=>{setCompanyName(e.target.value)}}
               required/>
          </div>
  
          <div className="emailID">
              <label>EmailID:</label>
              <input
                  type="email"
                  value={emailID}
                  onChange={(e)=>{setEmailID(e.target.value)}}
                  required/>
  
          </div>
  
          <div className="password">
              <label>Password:</label>
              <input
                  type="password"
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                  required/>
          </div>
  
          <div className="btn">
              <button type="submit">
                  Register
              </button>
          </div>
  
          </form>
          {message && <p>{message}</p>}
      </div>
  )
  }

  const RegistrationSwitch = () =>{
    const[userType,setUserType] = useState('student');

    const handleUserTypeChange = (type) =>{
      setUserType(type)
    }

    return(
      <div className={userType === "student"?"registration-container":"registration-form"}>
        <h1>Register</h1>
        <div className='render-switch'> 
          <select value={userType} 
          onChange={(e)=>{setUserType(e.target.value)}
        }>
          <option value="student">Student</option>
          <option value="company">Company</option>
        </select>
        </div>
        {userType === "student"?<RegisterStudent/>:<RegisterCompany/>}
      </div>
    )
  }

export default RegistrationSwitch;
