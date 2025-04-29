import { useState } from "react";


export default function NameForm()
{
    const [name, setName] = useState('');
    const handleChangeName = (e) =>
        setName(e.target.value);

    return(
        <>
        <input type="text" value={name} onChange={handleChangeName} />
        <p>You Typed: {name}</p>
        </>
    )
}