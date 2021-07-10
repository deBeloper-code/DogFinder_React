


export const conectApi = async( breed )=>{
    
    // const url = `https://dog.ceo/api/breed/african/images`;
    const url = `https://dog.ceo/api/breed/${ encodeURI(breed) }/images`;
    
    const resp = await fetch(url);
    const datos = await resp.json();
    
   
    
 
    return datos
        
    
    
}