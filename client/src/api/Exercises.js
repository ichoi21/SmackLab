import React, {useState} from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: "https://wger.de/api/v2/muscle/?limit=20offset=20muscle=Soleus"
});

const Exercises = () => {

    const [state, setState] = useState({exercises : []});
    
    
    api.get('/').then(res=>{
        console.log(res.data);
        setState({ exercises: res.data});
    });

    return (
        <div>
            
        </div>
    )
}

export default Exercises
