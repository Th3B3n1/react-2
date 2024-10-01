interface Header
{
    title: string
}

export function Header(props: Header)
{
    return <h1>{props.title}</h1>
}