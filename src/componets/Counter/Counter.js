import {useState} from "react";
import "./Counter.css";
function Counter(props){
    const { startVal, decVal=1, incVal=1} = props;
    const [  count, setCount] = useState(startVal);
    function onClick(){
        setCount(count + incVal);
    }
    function onDec(){
        setCount(count - decVal);
    }
    function onReset(){
        setCount(0);
    }
    return  (
        <div className={"counter"}>
            {count}
            <div>
            <button className={"header"} onClick={onClick}>i++</button>
            <button onClick={onDec}>i--</button>
            <button onClick={onReset}>Reset</button>
            </div>
        </div>
    ) ;
}
export default Counter;