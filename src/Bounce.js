import React,{useContext,useEffect, useState} from 'react';
import _ from "lodash";
import {UserContext} from './Context'

function BounceComponent(arg){
    console.log("Props in functional  arg : ",arg)
    useEffect(function(){
        console.log("I Am use effect");
    })

    const [name,setName] = useState("Megala");

    const val = useContext(UserContext);
    function onChange(val){
        alert("OK");
        setName(val);
    }
    function clickButton(){
        clearTimeout(val.debounceTimer);
        val.debounceTimer = setTimeout(() => {
            onChange(val.debounceTimer)
        } , 3000);
    }
    return (<div>
        Debounce using loadash : <input onChange={_.debounce(onChange, 3000)} /><br></br>
        Debounce using JS : <button id="debounce" onClick={clickButton}>Click ME</button><br></br>
        Welcome to {name}
        </div>)
}
export default BounceComponent;