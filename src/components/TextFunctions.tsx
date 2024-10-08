import { useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function TextFunctions()
{
    const [text, setText] = useState("");
    const [textStyle, setTextStyle] = useState({});
    return (
        <>
            <Header title={"Color Changer"} />
            <input type="text" onInput={(e) => setText(e.currentTarget.value)} />
            <p style={textStyle}>{text}</p>
            <p>{text.length + " számú karaktert írt be a felhasználó" || "Még egy karaktert sem írt be a felhasználó."}</p>
            <button onClick={() => setTextStyle({textTransform: "uppercase"})}>Nagybetűs</button>
            <button onClick={() => setTextStyle({textTransform: "lowercase"})}>Kisbetűs</button>
            <button onClick={() => setTextStyle({textTransform: "none"})}>Visszaállít</button>
            <Footer name={"Gipsz Jakab"} date={"2024-09-30"} time={"15"} aiUsed={[
                "erre használtam",
                "arra használtam",
                "pontosan megfogalmazva..."
            ]} />
        </>
    )
}