interface Recipe
{
    title: string,
    ingridients: string[]
}

export function Recipe(props: Recipe)
{
    return (
        <>
            <h2>{props.title}</h2>
            <ul>
                {
                    props.ingridients.map((ingridient, index) =>
                    (
                        <li key={index}>{ingridient}</li>
                    ))
                }
            </ul>
        </>
    )
}