import {useState} from "react";

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
        <>
            {count}
            <button className={"header"} onClick={onClick}>i++</button>
            <button onClick={onDec}>i--</button>
            <button onClick={onReset}>Reset</button>
        </>
    ) ;
}
export default Counter;