import {useEffect, useState} from 'react'


function Api() {
    let [data, setData] = useState ({})

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(datos=>setData(datos.results))
        }, [])

    
    return(
        <>
        {data.map ((producto,index) => {
            return(
                <div>
                <img src= {producto.imagen} alt={producto.nombre}/>
        
        </div>
            )
        })}
        

        </>





    );


    
}

export default Api;