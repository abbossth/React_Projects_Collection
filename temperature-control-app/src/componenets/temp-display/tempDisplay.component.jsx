
const tempDisplay = ({ bgColor, degree }) => {
    const styles = {
        backgroundColor: bgColor
    }
    return (
        <div style={styles} className="circleDisplay">
            <span>{degree}°C</span>
        </div>
    )
}
export default tempDisplay