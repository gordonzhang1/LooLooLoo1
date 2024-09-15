import '../App.css'
import {useState} from 'react'
import React from 'react'


export default function Direction({text}){
    const [color, setColor] = useState("white");
    const [clicked, setClicked] = useState(false);

    // const click = () => {
    //     color === "white" ? setColor('rgba(255,255,255,0.4)') : setColor("white");
    //     if (clicked){
    //         setClicked(false);
    //     }
    //     else{
    //         setClicked(true);
    //     }
    // }

    return (
    <div className="direction" style={{backgroundColor: color}}> 
        <h3>{text}</h3>
    </div>)
}
