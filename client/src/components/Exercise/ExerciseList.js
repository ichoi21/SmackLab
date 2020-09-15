import { Router } from 'express';
import React from 'react'
import {useParams} from 'react-router-dom';
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom';
const ExerciseList = () => {
    const {category} = useParams();

    function Category() {
        return (<h1>This is {category} category</h1>)
    }
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route to="/exercises/:category">

                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default ExerciseList
