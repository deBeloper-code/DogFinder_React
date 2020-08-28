import React from 'react';
import { useFetchBreed } from '../hooks/useFetchBreed';


const BreedGrid = ({breed}) =>{

    const {data: images, loading} = useFetchBreed(breed);

let imagenes;
   if (loading === 'success') {
        imagenes =  <div className='ContentImagenes'>
       {images.map(img=>{
           return(<img className='Imagenes' key={images.length * Math.random(115)} src={img} alt={breed}/>)
           
       })}
       </div> 
   }
       
   if (loading === 'error') {
       imagenes = <div className='ErrorNohay'>
                    
                <h1 className='ErrorH1' >Lo sentimos no encontramos esa raza....!</h1>
                
                    </div>

        setTimeout(() => {
            document.location.reload();
        }, 2000);
   }


    return(
        <>
            {imagenes}   
        
        </>
    )
}


export default BreedGrid;