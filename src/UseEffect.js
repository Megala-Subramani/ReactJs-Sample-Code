import React, {useState,useEffect} from 'react';

function Caller(){
const [name,setName] = useState("MEGALA");   
const [details,setDetails] = useState({"Data":[]});
//const [Emp,setEmp] = useState({"Name":"ABC","Age":5});
useEffect(function(){
    console.log("I Am use effect, i am replacing render method");
    //setName("NAN") // -> setState/useState will call the function comp/class Comp again 
    //run this script u will get below error in console panel
    /*webpackHotDevClient.js:138 src\UseEffect.js
    Line 7:1:  React Hook useEffect contains a call to 'setName'. 
    Without a list of dependencies, this can lead to an infinite chain of updates.  
    To fix this, pass [] as a second argument to the useEffect Hook  react-hooks/exhaustive-deps*/
})
console.log("EXE Caller")
useEffect(function(){
    console.log("I am the replacement of Component did Mount");
    var newAr = [{"Name":"MEGALA","Age": 28 ,"Gender" : "Female"},{"Name":"Navtheeb","Age": 1 ,"Gender" : "Male"}]
    setDetails({"Data":newAr});
},[])
useEffect(function(){
    console.log("I am the replacement of Component did Update");
},[name])
function textChange(event){
    setName(event.target.value);
} 
return (<React.Fragment><div>
  UseEffect :  <input type="text" onChange={textChange} /> {name}
</div>
<div>
    {console.log("Inside ME", {name})}
 <table border="1" >
     <thead></thead>
     <tbody>
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
    </tr>{ 
    details.Data.map(function(obj,index){
        return (<tr key={index} >
            <td>{obj.Name}</td>
            <td>{obj.Age}</td>
            <td>{obj.Gender}</td>
        </tr>)
    })}
    </tbody>
 </table>
 
</div>
</React.Fragment> )
}
export default Caller;