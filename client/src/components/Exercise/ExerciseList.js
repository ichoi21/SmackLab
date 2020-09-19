import React,{useEffect, useState} from 'react'
import Exercise from './Exercises';
import allExercises from './Exercise.json';
import axios from 'axios';
import Video from './Video';
import ExerciseCard from './Card/ExerciseCard';
import {Grid} from '@material-ui/core';
import {BrowserRouter as Router, Switch, Link, Route, useParams} from 'react-router-dom';
const ExerciseList = () => {
    
        
        let parts = [];
        const [state, setState] = useState({name: []});
        const [bodyParts, setBodyParts] = useState({body: []});
        let {muscles} = useParams();

        const getExercises = ()=> {

            allExercises.map((exercise)=>{
                if(exercise[0] === muscles)
                {
                    console.log("matching");
                    exercise.map((muscle)=>{
                        console.log(muscle);
                        parts.push(muscle);
                    })
                }

                setBodyParts({body: parts});
            })
        
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

                        {bodyParts.body.map((exercise)=>{
                            console.log(exercise);
                          return(  <>
                            <ExerciseCard name={exercise} exercise = {exercise} text={muscles} />
                            
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
