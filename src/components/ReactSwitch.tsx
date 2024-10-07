import { useState } from "react"

export function ReactSwitch()
{
    const [baseSource] = useState("https://www.w3schools.com/js/")
    const [onSource] = useState("pic_bulbon.gif")
    const [offSource] = useState("pic_bulboff.gif")
    const [currrentSource, setCurrentSource] = useState(baseSource + offSource)
    
    function switchLight(e: React.MouseEvent<HTMLImageElement, MouseEvent>)
    {
        if (e.currentTarget.src.includes(offSource))
        {
            setCurrentSource(baseSource + onSource);
        }
        else
        {
            setCurrentSource(baseSource + offSource);
        }
    }
    
    return (
        <>
            <img src={currrentSource} alt="Light bulb" onClick={(e) => switchLight(e)} />
        </>
    )
}