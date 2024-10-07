import { Header } from "./Header";
import { ReactSwitch } from "./ReactSwitch";
import { Footer } from "./Footer";

export function Switch()
{
    return (
        <>
            <Header title={"Feladat Szövegfüggvényekkel kapcsolatban"} />
            <ReactSwitch />
            <Footer name={"Gipsz Jakab"} date={"2024-09-30"} time={"15"} aiUsed={[
                "erre használtam",
                "arra használtam",
                "pontosan megfogalmazva..."
            ]} />
        </>
    )
}