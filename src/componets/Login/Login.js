import { useState} from "react";
import './Login.css';
export default function Login(props){
    let [ username, setUsername] = useState("");
    let [ password, setPassword] = useState("");

    function onUsername(event){
        console.log(username);
        setUsername(event.target.value);
    }
    function onPassword(event){
        console.log(password);
        setPassword(event.target.value);
    }

    return (
        <form className={"form"} onSubmit={props.onSubmit(username, password)} >
            <header>{"Login"}</header>
            <input onChange={onUsername} placeholder={"username"}/>
            <input onChange={onPassword} type={"password"}></input>
            {props.errorMessage?<p>{props.errorMessage}</p>: null}
            <button type={"submit"}>Login</button>
            <button type={"button"} onClick={props.onSignUp(username, password)}>Sign-Up</button>
        </form>
    )
}