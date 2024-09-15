import '../App.css'
import {useState} from 'react'
import React from 'react'


export default function Direction({text}){
    const [color, setColor] = useState("white");

    return (
    <div className="direction" onClick={() => color === "white" ? setColor("green") : setColor("white")} style={{backgroundColor: color}}> 
        <h3>{text}</h3>
    </div>)
}
