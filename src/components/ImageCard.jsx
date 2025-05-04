function ImageCard({url, size}){
    const outputSize = {
        sm : 'w-20, h-20',    
        md : 'min-w-50 h-35',    
        lg : 'w-80 h-50',    
        xl : 'w-xl',    
    };

    return(
    <img 
    src={url} 
    alt="" 
    className={`rounded-xl ${outputSize[size]}`}
    />   
    );
}

export default ImageCard;