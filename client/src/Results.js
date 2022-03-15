import './App.css';
import React from "react";
import {useState} from "react";
import Axios from "axios";
import {Link} from "react-router-dom";
import {Form} from "react-bootstrap";

function Results() {
    const [ptag, setPTag] = useState("*");   // P.Tag (Electronics, Furniture, Clothing, Books)
    const [pname, setPName] = useState(""); // P.Name (Name of product set in search bar)

    // store all db results within a list
    const [userList, setUserList] = useState([]);

    // // API CALL
    // const getUsers = () => {
    //     Axios.get('http://localhost:3001/users',{
    //     }).then((response) => {
    //         setUserList(response.data);
    //         console.log("Searching " +pname + " within " + ptag +".");
    //       });
    // };


    // Failed attempt of using params
    async function getUsers (){
        const response = await Axios.get('http://localhost:3001/Products',
        {
            params: {
                ptag: ptag,
                pname: pname,
            }
        });
        setUserList(response.data);
    };

    // Find a way to display getUsers without needing onClick for default display
    return (
    <div className="App">
        <Link to ="/"><button>Create User</button></Link>

        <div className="results">
        <h1>Results</h1>

        {/* Drop Down */}
        <div class="input-group">
        <Form.Select>
        <option value ="*" onClick={(event) => {setPTag("*");}}>None</option>
        <option value ="books" onClick={(event) => {setPTag("books");}}>Books</option>
        <option value ="electronics" onClick={(event) => {setPTag("electronics");}}>Electronics</option>
        <option value ="furniture" onClick={(event) => {setPTag("furniture");}}>Furniture</option>
        </Form.Select>
        {/* Search Bar */}
        <input type="search" onChange={(event) => {setPName(event.target.value);}} class="form-control search" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
        <button type="button" class="search.btn" onClick={getUsers}>search</button>
        </div>

         {/* Below function maps our list to readable format */}
         {userList.map((val, key) => {
             return <div className="user">
                 <h3>Name:<br/> {val.pname}</h3>
                 <h3>Description:<br/> {val.pdescription}</h3>
                 <h3>Tag:<br/> {val.ptag}</h3>
                 </div>
         })}
        </div>
     </div>
    );
  }

  export default Results;