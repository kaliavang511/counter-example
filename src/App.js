import './App.css';
import { useState } from "react";
import Counter from "./componets/Counter/Counter"
import Login from "./componets/Login/Login"
function App() {
    let [  loggedin, setLogin]  = useState(false);
    function onSubmit(username, password){
        return (event) =>{
            event.preventDefault();
            if (username == "user" && password == "pass") {
               setLogin(true);
            }
            console.log("LOGIN SUBMIT", username, password);
        }

    }
    function onLogout(){
        setLogin(false);
    }
    let content = null;
    if (loggedin) {
        content = (
            <>
            <button onClick={onLogout}>Logout</button>
            <Counter startVal={0}></Counter>
            </>
        );
    } else {
        content = <Login onSubmit={onSubmit}></Login>
    }
    return <>
     {content}
    </>

}

export default App;
