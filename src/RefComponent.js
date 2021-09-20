import React,{useRef,useEffect} from 'react';

const RefComponent=()=>{
    const fruitName = useRef("Banana");
    const myRef = useRef(0);
    useEffect(function(){
        fruitName.current="Apple"; //ref wont call re-render method        
        console.log("myRef.current : ",myRef.current.innerText);
    })
    return (<div >
        I AM REF COMPO {fruitName.current} 

        <div ref={myRef} >
            New Data Available
        </div>
    </div>
   
    )

}
export default RefComponent;