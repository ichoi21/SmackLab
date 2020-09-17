import React,{useEffect, useState} from 'react'
import Exercise from './Exercises';
import axios from 'axios';
import Video from './Video';
import ExerciseCard from './Card/ExerciseCard';
import {Grid} from '@material-ui/core';
import {BrowserRouter as Router, Switch, Link, Route, useParams} from 'react-router-dom';
const ExerciseList = () => {
    
  
        const [state, setState] = useState({name: []});
        let {muscles} = useParams();
        let array = [];
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
                    array.push(ex.name)
                }
            }
        })
        setState({name: array});
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
                    
                    <div className="container" spacing={6}>

                        {state.name.map((exercise)=>{
                            console.log(exercise);
                          return(  <>
                            <ExerciseCard name={exercise} text={muscles}/>
                            <Video name={exercise}/>
                            </>)
                        })}
                    
                    </div>
                   
                        
                    
                 
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default ExerciseList
