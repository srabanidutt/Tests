import React from 'react'
import {BrowserRouter,Switch,Route, Redirect} from 'react-router-dom'
import Answers from '../components/answers'
import Answer1 from '../components/qus1'
import Answer2 from '../components/qus2'
import Answer3 from '../components/qus3'
import Answer4 from '../components/qus4'
import Answer5 from '../components/qus5'
export default function Routing() {
    return (
        <div>
            <BrowserRouter>
            <Answers/>
                <Switch>
                <Route exact path="/answer1" component={Answer1}/>
                <Route exact path="/answer2" component={Answer2}/>
                <Route exact path="/answer3" component={Answer3}/>
                <Route exact path="/answer4" component={Answer4}/>
                <Route exact path="/answer5" component={Answer5}/>
                </Switch>
            </BrowserRouter>
            
        </div>
    )
}
