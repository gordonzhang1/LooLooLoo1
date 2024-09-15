import './Waterlog.css';
import Menu from '../components/Menu.jsx';
import Water from '../components/Water.jsx';

import { useState } from 'react'
import { useEffect } from 'react'

export default function Waterlog() {

    const [waterLevel, setWaterLevel] = useState(() => {
        const localValue = localStorage.getItem("LEVEL")
        if (localValue == null) return (1)
        return JSON.parse(localValue)
    });
    useEffect(() => {
        localStorage.setItem("LEVEL", JSON.stringify(waterLevel))
    }, [waterLevel])

    const [watstars, setWatstars] = useState(() => {
        const localValue = localStorage.getItem("STARS")
        if (localValue == null) return (1)
        return JSON.parse(localValue)
    });
    useEffect(() => {
        localStorage.setItem("STARS", JSON.stringify(watstars))
    }, [watstars])

    const handleLevelChange = (add) => {

        if (add) {
            if (waterLevel >= 8) {
                setWatstars(watstars + 1)
                setWaterLevel(1)
                console.log(watstars)

            }
            else {
                setWaterLevel(waterLevel + 1)
            }
        }
        else {
            if (waterLevel > 1) {
                setWaterLevel(waterLevel - 1)
            }
        }

    }


    return (
        <>
            <div className="water-container">
                <img src="src/assets/moon.png" className = "moon"></img>
                <hr></hr><br></br><hr></hr><br></br><hr></hr><br></br><hr></hr><br></br><hr></hr><br></br>
                <hr></hr><br></br><hr></hr><br></br><hr></hr><br></br><hr></hr>
                <Water waterLevel={waterLevel} handleLevelChange={handleLevelChange} watstars = {watstars} />
            </div>
            <Menu></Menu>
        </>
    );
}
