import axios from "axios";
import React, { useEffect } from "react";

function ChangePassword() {
    const [mydata, setData] = React.useState({})

    const onChange = (event) => {
        setData((mydata,) => ({
            ...mydata, id,
            [event.target.name]: event.target.value
        }));
    }
    const [id, setId] = React.useState({})
    useEffect(() => {
        if (localStorage.getItem('st_id')) {
            var a = localStorage.getItem('st_id')
            setId(a);
        }
    }, [])

    const sabmitvalue = (event) => {
        event.preventDefault();
        var myformdata = new FormData();
        console.log(mydata.id)
        myformdata.append("st_id", mydata.id);
        myformdata.append("opass", mydata.password);
        myformdata.append("npass", mydata.npassword);
        myformdata.append("cpass", mydata.cpassword);

        axios.post("https://akashsir.in/myapi/crud/student-change-password-api.php", myformdata)
            .then(function (response) {
                console.log(response)
                if (response.data.flag === "1") {
                    var msg = response.data.message;
                    alert(msg);
                    window.location = "Dashbord";
                }
                else {
                    alert(response.data.message);
                }
            }).catch(function (response) {
                console.log(response)
            })
    }
    return (
        <div>
            <form onSubmit={sabmitvalue}>
                <h1>Change Password</h1>
                User Id : <input type="text" name="id" placeholder="Enter Set ID" onChange={onchange} Value={id} /><br /><br />
                Old Password : <input type="password" name="password" placeholder="Enter Old Password" onChange={onChange} /><br /><br />
                New Password : <input type="password" name="npassword" placeholder="Enter New Password" onChange={onChange} /><br /><br />
                Confirm Password : <input type="password" name="cpassword" placeholder="Enter Confirm Password" onChange={onChange} /><br /><br />
                <input type="submit" Value="Change Password" />
            </form>
        </div>
    )
}

export default ChangePassword;