    export function Card({children})
    {
        return(
        <div
            style={{
                border:"2px solid black",
                width:300,
                height:300,
            }}
        >
            {children   }
        </div>   
        );
    }