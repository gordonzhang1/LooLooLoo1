import '../App.css'


export default function Water({ waterLevel, handleLevelChange, watstars }) {
    function add() {
        handleLevelChange(true)
    }
    function subtract() {
        handleLevelChange(false)
    }


    return <>
        <img className="goose" src="src/assets/goose.png" style={{ bottom: (waterLevel) * 60 + 90, left: waterLevel * 35 }}></img>
        <div className="water" style={{ height: (waterLevel) * 60, bottom: (waterLevel) * 60 + 160 }}></div>
        <div className="button-container">
        <p className = "watstar-count">{watstars}</p><img src = "src/assets/watstar.png" className = "watstar"></img>

            <button className="add" onClick={add}> + </button>
            <button className="subtract" onClick={subtract}> - </button>
        </div>

    </>
}