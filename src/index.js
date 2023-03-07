import React from 'react';
import ReactDoom from 'react-dom/client';
import {Hola, Hola2} from './suma'
import Producto from './producto'
import {Posts} from './posts'
import {user} from './users'


const root = ReactDoom.createRoot(document.getElementById('root'))

root.render(<h1>HOlA WENAS</h1>)

//const root = ReactDoom.createRoot(document.getElementById('root'));

// function Hola()
// {
//     // const name = 'Jhowellz';
//     // return <h1> Wenas </h1>
//     // return <h1>{name}</h1>

//     // const aprobado = false;
//     // var sino;
//     // if(aprobado)
//     // {
//     //     sino = <h1>Aprobado</h1>
//     //     // return <h1>Aprobado</h1>
//     // }
//     // else
//     // {
//     //     sino = <h1>Reprobado</h1>
//     //     // return <h1>Reprobado</h1>
//     // }
//     // return <h1>{aprobado ? 'aprobadp':'reprobado'}</h1>
//     // return sino;

//     // Funcion con objeto sencillo

//     // const user = {
//     //     nombre: 'Melliet',
//     //     apellido: 'Aptia'
//     // }
//     // return <div>
//     //     <h1>{user.nombre}</h1>
//     //     <h2>{user.apellido}</h2>
//     // </div>

//     // Funcion

//     function sumar(a,b)
//     {
//         return a + b;
//     }

// }

root.render(<div>
    <Hola/>
    <Hola2/>
    <Hola/>
    <Hola2/>
    <Hola/>
    <Producto 
    titulo = "Some" 
    descripcion = "Va demasiado rapido"/>
</div>)

root.render(<section>
    <Posts/>
</section>)

root.render(<section>
    {user.map((user,i) =>{
        return (
            <div key = {i}>
                <h1>
                    {user.nombre}
                </h1>
                <image>
                    src = {user.image}
                </image>
            </div>
        );
    })}
</section>)
