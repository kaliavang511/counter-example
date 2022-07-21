import './App.css';
import { useState } from "react";
import Counter from "./Counter/Counter"
function App() {
 return [
     <Counter startVal={5}/>,
    <Counter startVal={6}/>,
    <Counter startVal={7} decVal={2} incVal={2}/>,
 ]

}

export default App;
