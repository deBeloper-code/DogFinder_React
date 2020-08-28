import React, { useState } from 'react';
import { useFetchListBreed } from '../hooks/useFetchListBreed';



const SearchBreed = ({setBreed}) =>{
    const [inputValue, setInputValue] = useState('');

    const {data: breeds, loading} = useFetchListBreed();


    let nombresRazas = []
    for (const key in breeds) {
        nombresRazas.push(key);
      
    }
 
   
    const handleSubmit = (e) =>{
        
        setBreed([inputValue])
        e.preventDefault();
        scroll();
    }
    const handleInput = (e) =>{
        setInputValue(e.target.value)
        
    }
    
        const nuevaPerros=[]
  
        for( const k in nombresRazas){
            if(inputValue !== ''){
                if (nombresRazas[k].indexOf(inputValue) !== -1) {
                    
                    nuevaPerros.push(nombresRazas[k])      
               
                 }
            }  
        }

        const scroll = ()=>{
            window.scroll({
                top: 700,
                behavior: 'smooth'
              });

        }
        // const [chose, setchose] = useState()
        const escoger = (e)=>{
            
              
               setInputValue( e.target.innerHTML)
               
            
            
        }
        
       
        let nuevaPerrosSI = nuevaPerros.map(perro=>{
            
            return(<div className='RazasSugeridas'  onClick={escoger} key={nuevaPerros.length * Math.random(159)} >{perro}</div>)
        })

         
    
    return(
        <>
        
        <form onSubmit={handleSubmit }>
            <input type='text'
            placeholder = 'ej. akita'
            value={inputValue}
            onChange ={handleInput}
            
            />
            <button className='buscar'>Buscar</button>
        </form>
        
       <div className='contentRazas'>
        
       {nuevaPerrosSI}
       </div>
       

          
        
      
        
        </>
    )
}


export default SearchBreed;