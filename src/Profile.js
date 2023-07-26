import axios from "axios";
import React, { useEffect } from "react";

function Profile() {
    const [mydata, setData] = React.useState({})

    const onChange = (event) => {
        setData((mydata) => ({
            ...mydata, id,
            [event.target.name]: event.target.value
        }))
    }
    const [id, setId] = React.useState({})
    useEffect(() => {
        if (localStorage.getItem('st_id')) {
            var a = localStorage.getItem('st_id')
            var b = JSON.parse(a)
            setId(b);
        }
    }, [])

    const sabmitValue = (event) => {
        event.preventDefault();
        var myformdata = new FormData();
        myformdata.append("st_id", mydata.id);
        myformdata.append("st_name", mydata.name);
        myformdata.append("st_gender", mydata.gender);
        myformdata.append("st_email", mydata.email);
        myformdata.append("st_mobileno", mydata.mobile);
        axios.post("https://akashsir.in/myapi/crud/student-edit-api.php", myformdata)
            .then(function (response) {
                console.log(response)
                if (response.data.flag === "1") {
                    var msg = response.data.message;
                    alert(msg);
                    window.location = "Dashbord";
                }
                else {
                    alert(response.data.message)
                }
            }).catch(function (response) {
                console.log(response);
            })
    }
    return (
        <>
            <form onSubmit={sabmitValue}>
                <h1>Profile Update</h1>
                User Id : <input type="text" name="id" placeholder="Enter ID" onChange={onChange} value={id} /><br /><br />
                Name : <input type="text" name="name" placeholder="Enter Name" onChange={onChange} /><br /><br />
                Gender : <input type="text" name="gender" placeholder="Enter Gender" onChange={onChange} /><br /><br />
                Email : <input type="text" name="email" placeholder="Enter Email ID" onChange={onChange} /><br /><br />
                moblie No : <input type="number" name="mobile" placeholder="Enter Mobail No" onChange={onChange} /><br /><br />
                <input type="submit" value="Update Profile" />
            </form>
        </>
    )
}

export default Profile;