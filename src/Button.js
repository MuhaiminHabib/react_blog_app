const Button = ({color, bgColor, text, onClick}) => {
    return (
        <button
            onClick={onClick}
            style={{color: color, 
            backgroundColor: bgColor}}>
                {text}
            </button>
    )
}

export default Button;