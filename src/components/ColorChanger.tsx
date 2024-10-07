import { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function ColorChanger()
{
    const [colors] = useState(
        [
            "background-color: black;",
            "background-color: white;",
            "background-color: red;",
        ]
    );
    function randomColor()
    {
        return colors[Math.floor(Math.random() * (colors.length - 0))]
    }
    return (
        <div>
            <Header title={"Color Changer"} />
            <button onClick={(e) => e.currentTarget.parentElement?.setAttribute("style", randomColor())}>Change Color</button>
            <Footer name={"Gipsz Jakab"} date={"2024-09-30"} time={"15"} aiUsed={[
                "erre használtam",
                "arra használtam",
                "pontosan megfogalmazva..."
            ]} />
        </div>
    )
}