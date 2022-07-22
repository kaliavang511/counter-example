import './App.css';
import { useState } from "react";
import Counter from "./componets/Counter/Counter"
import Login from "./componets/Login/Login"
function App() {
    let [  loggedin, setLogin]  = useState(false);
    let [errorMessage, setErrorMessage] = useState('');
    let [userList, setUserlist]  = useState([
        {username: "user0", password: "pass"},
        {username: "user1", password: "pass"},
        {username: "user2", password: "pass"},
        {username: "user3", password: "pass"},
    ]);
    function onSubmit(username, password){
        return function realHandler(event) {
            event.preventDefault();
            let targetuser = userList.find(( elem)=>{
                return elem.username == username;
            });
            if(!targetuser){
                setLogin(false);
                setErrorMessage("User not found")
                return;
            }
            if(targetuser.password == password) {
                setLogin(true);
                setErrorMessage("");
                return;
            } else {
                setErrorMessage("Password wrong")
            }

            console.log("LOGIN SUBMIT", username, password);
        }

    }
    function onSignUp(username, password){
       return function (){
           let targetuser = userList.find((elem)=>{
               return elem.username == username;
           })
           if(!targetuser){
               userList.push({"username":username, "password": password});
               setUserlist(userList)
           } else {
               return setErrorMessage("Username exist")
           }

       }
    }
    function onLogout(){
        setLogin(false);
    }
    let content = null;
    if (loggedin) {
        content = (
            <>
            <button className="header" onClick={onLogout}>Logout</button>
            <Counter startVal={0}></Counter>
            </>
        );
    } else {
        content = <Login onSubmit={onSubmit} onSignUp={onSignUp} errorMessage={errorMessage}></Login>
    }
    return <>
     {content}
    </>

}

export default App;
