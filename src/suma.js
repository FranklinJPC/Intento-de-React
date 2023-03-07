export function Hola()
{
    function sumar(a,b)
    {
        return a + b;
    }
    return <h1>
        {sumar(8,5)}
    </h1>
}
export function Hola2()
{
    function restar(a,b)
    {
        return a - b;
    }
    return <h2>
        {restar(14,5)}
    </h2>
}