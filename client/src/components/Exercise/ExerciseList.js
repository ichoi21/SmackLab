import React,{useEffect, useState} from 'react'
import Exercise from './Exercises';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Link, Route, useParams} from 'react-router-dom';
const ExerciseList = () => {
  
        const [state, setState] = useState({name: []});
        let {muscles} = useParams();
        console.log(muscles);

        const getExercises = ()=> {
            axios.get(`https://wger.de/api/v2/exerciseinfo/?limit=100&offset=20`).then((res)=>{
        console.log(res.data.results);
        const categ = res.data.results;
         categ.map((ex)=>{
             console.log(ex.category.name)
            if(ex.category.name===muscles)
            {
                if(ex.name != ""){
                    setState({
                        name: ex.name
                    })
                }
            }
        })
       });
        }
         
        useEffect(() => {
            getExercises();
        }, [])
    

    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/exercises/:muscles">
                        <Exercise/>
                        <h1>This is {muscles}</h1>
                       <div className="container">
                       {state.name.map((exercises)=>{
                            console.log(exercises);
                        })}
                           </div> 
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default ExerciseList
