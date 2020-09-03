import React, {useEffect, useState} from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: "https://wger.de/api/v2/muscle/?limit=20offset=20muscle=Soleus"
});

const Exercises = () => {
    
    const [state, setState] = useState([]);



    const getMuscles = ()=>{

        api.get('/').then(res=>{
            console.log(res.data.results);
            setState(res.data.results)
        });
    }

    useEffect(() => {
        getMuscles();
    }, []);

    console.log(state);
    return (
        <div className="container" style={{border: '1px solid'}}>
            
            {state.map((exercise) => (
                <h2 key={exercise.id}>{exercise.name}</h2>
            ))}
        </div>
    )
}

export default Exercises
