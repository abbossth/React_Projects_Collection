import { useState } from "react"
import TempDisplay from "../temp-display/tempDisplay.component"
import Button from "../button/button.component"


const ControlPanel = () => {
    const [temp, setTemp] = useState(0);
    const add = () => {
        setTemp(temp + 1)
    }
    const substract = () => {
        setTemp(temp - 1)
    }
    return (
        <div className="controlPanel">
            <TempDisplay degree={temp} />
            <div className="row">
                <div className="col-6">
                    <Button add={add} type={"+"} />
                </div>
                <div className="col-6">
                    <Button substract={substract} type={"-"}/>
                </div>
            </div>
        </div>
    )
}

export default ControlPanel