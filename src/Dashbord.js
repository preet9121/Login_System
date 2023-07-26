import React, { useEffect } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Dashbord() {
    const [dashbord, setDashbord] = React.useState("");

    function logout() {
        localStorage.clear();
        window.location = 'Login';
    }

    useEffect(() => {
        if (localStorage.getItem("st_name")) {
            var a = localStorage.getItem("st_name")
            setDashbord(a);
        }
        else {
            window.location = "Login"
        }
    })
    return (
        <div>
            <form>
                <h1>Dashbord</h1>
                Hiii, {dashbord}<br />
                <Link to="/ChangePassword">ChangePassword</Link> |
                <Link to={"/Profile"}>Profile</Link> |
                <button onClick={logout} type="button">Logout</button>
            </form>
        </div>

    )
}
export default Dashbord;