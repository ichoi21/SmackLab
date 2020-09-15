import React from 'react'
import Exercise from './Exercises';

import {BrowserRouter as Router, Switch, Link, Route, useParams} from 'react-router-dom';
const ExerciseList = () => {


    function Category() {
        let {category} = useParams();
        return <div>This is {category} category</div>
    }
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/exercises/:category">
                        <Category/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default ExerciseList
