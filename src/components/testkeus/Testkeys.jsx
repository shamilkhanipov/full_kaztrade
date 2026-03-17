import React, { use } from "react";
import { useState } from "react";

export default function Test (){
    // const [one, setOne] = useState(false);

    // function show(){
    //     setOne(true)
    // }


    // const [one1, setOne1] = useState(false);

    // function show1(){
    //     setOne1(!one1)
    // }

    const [change, setChange] = useState(false);
    
    function changan (){
        setChange (!change)
    }

    return(
        <>
        {/* <button onClick={show}>Показать сообщение</button>
        {one && 
        <h1>Привет</h1>
        } */}

        {/* <button onClick={show1}>Показать \ Скрыть текст</button>
        {one1 && 
        <h1>Привет</h1>
        } */}


        <button onClick={changan}>
            {change ? "Скрыть" : "Показать"}
            </button>
        
         
        </>
    )
}
