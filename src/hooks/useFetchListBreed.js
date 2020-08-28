import { conectApiListAll } from "../helpers/conectApiListAll";
import { useState, useEffect } from "react";


export const useFetchListBreed = () =>{


    const [ state, setState] = useState({
        data:[],
        loading: ''
    });

    useEffect(() => {

        conectApiListAll()
        .then(({message, status})=>{
            setState({
                data: message,
                loading: status
            })
          
        });

        
    }, [])


    return state;
}