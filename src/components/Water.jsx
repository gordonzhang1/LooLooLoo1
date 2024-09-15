import '../App.css'


export default function Water({ waterLevel, handleLevelChange, watstars }) {
    function add() {
        handleLevelChange(true)
    }
    function subtract() {
        handleLevelChange(false)
    }


    return <>
        <img className="goose" src="https://alanbui.ca/assets/images/hackthenorth/goose.png" style={{ bottom: (waterLevel) * 60 + 90, left: waterLevel * 35 }}></img>
        <div className="water" style={{ height: (waterLevel) * 60, bottom: (waterLevel) * 60 + 160 }}></div>
        <div className="button-container">
        <p className = "watstar-count">{watstars}</p><img src = "https://alanbui.ca/assets/images/hackthenorth/watstar.png" className = "watstar"></img>

            <button className="add" onClick={add}> + </button>
            <button className="subtract" onClick={subtract}> - </button>
        </div>

    </>
}