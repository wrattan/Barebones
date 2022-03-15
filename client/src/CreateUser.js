import './App.css';
import React from "react";
import {useState} from "react";
import Axios from "axios";
import {Link} from "react-router-dom";


function CreateUser() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [userid, setID] = useState(0);
  const [password, setPassword] = useState("");

  // const displayInfo = () => {
  //   console.log(name + phone + email + userid + password);
  // };
  
  const addUser = () => {
    Axios.post('http://localhost:3001/create', {
      userid: userid, 
      name: name, 
      phone: phone, 
      email: email, 
      password: password
    }).then(() => {
      console.log("success");
    });
  };

  return (
    <div className="App">
    <Link to ="/results"><button>Results Page</button></Link>
      <div className="information">
        <h1>Create User</h1>
          <label>Name</label>
          <input type="text" 
            onChange={(event) => {setName(event.target.value);}}/>
          <label>Phone Number</label>
          <input type="text" 
            onChange={(event) => {setPhone(event.target.value);}}/>
          <label>Email</label>
          <input type="email" 
            onChange={(event) => {setEmail(event.target.value);}}/>
          <label>Student ID</label>
          <input type="number" 
            onChange={(event) => {setID(event.target.value);}}/>
          <label>Password</label>
          <input type="text"
            onChange={(event) => {setPassword(event.target.value);}}/>
          <button onClick={addUser}>Add User</button>
      </div>
    </div>
    
   
  );
}

export default CreateUser;