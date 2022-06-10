import { useState } from "react"
import TempDisplay from "../temp-display/tempDisplay.component"
import Button from "../button/button.component"


const ControlPanel = () => {
    const [temp, setTemp] = useState(0);
    const [bgColor, setBgColor] = useState('black');
    const add = () => {
        let t = temp + 1
        console.log(t);
        setTemp(t)
        if (t >= 3) {
            setBgColor('red')
        } else if (t === 0) {
            setBgColor('black')
        } else {
            setBgColor('blue')
        }
    }
    
    const substract = () => {
        let t = temp - 1
        console.log(t);
        setTemp(t)
        if (t < 3 && t !== 0) {
            setBgColor('blue')
        } else if (t === 0) {
            setBgColor('black')
        } else {
            setBgColor('red')
        }
    }

    return (
        <div className="controlPanel">
            <TempDisplay bgColor={bgColor} degree={temp} />
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