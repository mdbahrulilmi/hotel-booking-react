function Button({label})
{
const handleClick = () =>
{
    alert(label + ' clicked');
};
    return(
        <button
            onClick = {handleClick}
        >
            {label}    
        </button>
    );
}

export default Button;