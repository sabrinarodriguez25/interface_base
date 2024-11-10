import React, { useEffect,useState } from "react";


const Simple =() => {

    const [menssage,setMenssage] = useState('');
    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log('Despues de renderizar');
    },[menssage]);


    return <div>
        <h2>Ejemplo useEffect</h2>
        <p>{menssage}</p>
        <input type="text" onChange={(event)=>{
            setMenssage(event.target.value);
        }}></input>
        <p>{count}</p>
        <button onClick={() =>setCount(count +1)}>CLICK</button>
    </div>
    
}