import React, {useState}  from 'react';
import SearchBreed from './components/SearchBreed';
import BreedGrid from './components/BreedGrid';




const DogFinder =()=>{

    const [breed, setBreed] = useState(['akita'])

   
       
   
    return(
        <>
        
        <div className= 'ContentVideo'>
            <video loop autoPlay muted  className="myVideo">
                <source src="./pets.mp4"  type="video/mp4" />
       
                </video>
        
            <div className='PrincipalWithInput'>
            <h1 className='PrincipalWithInputH1'> Search the breed </h1>
            <SearchBreed setBreed={setBreed} />
            
             </div>
        
        </div>
       
        
        
        
       

       
            
       
        <BreedGrid breed={breed} />
 
        </>
        )
}


export default DogFinder