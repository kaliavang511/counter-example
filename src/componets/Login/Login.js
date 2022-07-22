import { useState} from "react";
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

    return <form onSubmit={props.onSubmit(username, password)} >
        <input onChange={onUsername} placeholder={"username"}/>
        <input onChange={onPassword} type={"password"}></input>
        {props.errorMessage?<p>{props.errorMessage}</p>: null}
        <button type={"submit"}>Login</button>
    </form>
}