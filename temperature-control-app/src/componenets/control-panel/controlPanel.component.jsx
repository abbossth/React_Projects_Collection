import TempDisplay from "../temp-display/tempDisplay.component"
import Button from "../button/button.component"
const controlPanel = () => {
    return (
        <div className="controlPanel">
            <TempDisplay />
            <div className="row">
                <div className="col-6">
                    <Button />
                </div>
                <div className="col-6">
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default controlPanel