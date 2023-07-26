import React from "react";
import axios from "axios";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Signup() {
    const [mydata, myDataUpdate] = React.useState({})

    const onChange = (event) => {
        myDataUpdate((mydata) => ({
            ...mydata, [event.target.name]: event.target.value
        }));
    }
    const submitValue = (event) => {
        event.preventDefault();
        var myformdata = new FormData();
        myformdata.append("st_name", mydata.name);
        myformdata.append("st_gender", mydata.gender);
        myformdata.append("st_email", mydata.email);
        myformdata.append("st_mobileno", mydata.mobile);
        myformdata.append("st_password", mydata.password);
        axios.post("https://akashsir.in/myapi/crud/student-add-api.php", myformdata)
            .then(function (response) {
                console.log(response);
                var msg = response.data.message;
                alert(msg);
            }).catch(function (response) {
                console.log(response)
            })
    }
    return (
        <div>
            <form onSubmit={submitValue}>
                <h1>SignUp Here</h1>
                Enter Name : <input type="text" name="name" placeholder="Enter Name" onChange={onChange} /><br /><br />
                Select Gender : <input type="radio" name="gender" value={"Male"} onChange={onChange} /> Male
                <input type="radio" name="gender" value={"Female"} onChange={onChange} /> Female <br /><br />
                Enter Email ID : <input type="email" name="email" placeholder="Enter Email ID" onChange={onChange} /><br /><br />
                Enter Miblie No : <input type="text" name="mobile" placeholder="Enter Moblie No" onChange={onChange} /><br /><br />
                Enter Password : <input type="password" name="password" placeholder="Enter Password" onChange={onChange} /><br /><br />
                <input type="Submit" />
            </form><br />
            <Link to="/Login">Login</Link>
        </div>
    )
}

export default Signup;