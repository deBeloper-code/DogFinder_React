import {useState, useEffect} from 'react';
import { conectApi } from '../helpers/conectWithApi';


export const useFetchBreed = (breed) =>{


    const [ state, setState] = useState({
        data:[],
        loading: ''
    });

    useEffect(() => {

        conectApi(breed)
        .then(({message, status})=>{
            setState({
                data: message,
                loading: status
            })
          
        });

        
    }, [breed])


    return state;
}