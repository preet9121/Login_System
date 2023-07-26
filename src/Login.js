import React, { useState } from "react";
import axios from "axios";


import { Link } from "react-router-dom";

function Login() {
    const [mydata, setData] = useState()

    const onChange = (event) => {
        setData((mydata) => ({
            ...mydata, [event.target.name]: event.target.value
        }))
    }
    const submitValue = (event) => {
        event.preventDefault();
        const myformdata = new FormData();
        myformdata.append("st_email", mydata.email);
        myformdata.append("st_password", mydata.password);

        axios.post("https://akashsir.in/myapi/crud/student-login-api.php", myformdata)
            .then(function (response) {
                console.log(response);
                if (response.data.flag === "1") {   
                    alert("successfully login")
                    var a = response.data.st_name
                    var b = response.data.st_id
                    localStorage.setItem("st_name",(a));
                    localStorage.setItem("st_id", (b));
                    window.location = 'Dashbord'  
                }
                else {
                    alert("You Entered Wrong Email Id Or Pass")
                }
            }).catch(function (response) {
                console.log(response)
            })
    }
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={submitValue}>
                Email ID : <input type="email" name="email" placeholder="Enter Email Id" onChange={onChange} /><br /><br />
                Password : <input type="password" name="password" placeholder="Enter Password" onChange={onChange} /><br /><br />
                <input type="submit" />
            </form><br /><br />
            <Link to="/signup">SignUp</Link> |
            <Link to="/forgotpassword">forgot password</Link> |
        </>
    )
}

export default Login;