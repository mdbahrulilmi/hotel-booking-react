function Button({label, className})
{
    const isWhiteBg = className.includes("bg-white");
    const textColor = isWhiteBg ? "text-black" : "text-white";

    const handleClick = () =>
{
    alert(label + ' clicked');
};

    return(
        <button
            className={`hover:cursor-pointer px-10 py-3 rounded-sm shadow-md dark:bg-slate-800 text-sm ${className} ${textColor}`}
            onClick = {handleClick}
        >
            {label}    
        </button>
    );
}

export default Button;