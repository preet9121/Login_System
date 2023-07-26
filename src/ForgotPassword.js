import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ForgotPassword() {
    const [mydata, setData] = React.useState({})

    const onChange = (event) => {
        setData((mydata) => ({
            ...mydata,
            [event.target.name]: event.target.value
        }));
    }
    const submitValue = (event) => {
        event.preventDefault();
        var myformdata = new FormData();
        myformdata.append("st_email", mydata.email);
        axios.post("https://akashsir.in/myapi/crud/student-forgot-password-api.php", myformdata)
            .then(function (response) {
                console.log(response);
                if (response.data.flag === "1") {
                    var msg = response.data.message;
                    alert(msg);
                } else {
                    alert("You Enter wrong Email Id ");
                }
            }).catch(function (response) {
                console.log(response)
            });
    }
    return (
        <div>
            <form onSubmit={submitValue}>
                <h1>Forgot Password</h1>
                Email ID : <input type="text" name="email" placeholder="Enter Email ID" onChange={onChange} /><br /><br />
                <input type="submit" value="Get Password" />
            </form><br />
            <Link to="/ChangePassword">ChangePassword</Link> |
        </div>
    )
}

export default ForgotPassword;