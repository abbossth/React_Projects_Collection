
const Button = ({ type, add, substract }) => {
    return (
        <button 
            className="btn"
            onClick={(type === "+" ? add : substract)}
            >
            {type}
        </button>
    )
}

export default Button