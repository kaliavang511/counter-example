import {useState} from "react";
export default function TaskList(props){
    let [taskList, setTaskList] = useState([
        "hello",
        "do some dishes",
        "clean windows"
    ]);
    let [newTask, setNewTask] = useState();
    function onChange(event){
        console.log(newTask);
        setNewTask(event.target.value);
    }
    function onClick(){
        //taskList.push(newTask);
        //setTaskList(taskList)

       setTaskList([ ...taskList, newTask])
    }
    return <>
        <input type={"text"} onChange={onChange}></input>
        <button onClick={onClick}>Add Task</button>
        {
            taskList.map((t)=>{
                return <p>{t}</p>
            })
        }

        </>

}