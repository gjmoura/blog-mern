import React from "react";
import ViewLogin from  '../views/viewLogin.jsx'
import ViewRegister from  '../views/viewRegister.jsx'
import ViewRegisterPost from  '../views/viewRegisterPost.jsx'
import ViewFeed from '../views/viewFeed.jsx'
import ViewProfile from '../views/viewProfile.jsx'
import ViewPost from '../views/viewPost'
import ViewComponents from '../views/viewComponents'
import Navigationbar from '../components/navbar/navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const Routes = () => {
  return (
    <div>
      <Router>
        <Navigationbar/>

        <Switch>
          <Route exact path="/">
            <ViewLogin/>
          </Route>
          <Route path="/viewRegister">
            <ViewRegister/>
          </Route>
          <Route path="/viewRegisterPost">
            <ViewRegisterPost/>
          </Route>
          <Route path="/viewFeed">
            <ViewFeed/>
          </Route>
          <Route path="/viewProfile">
            <ViewProfile/>
          </Route>
          <Route path="/viewPost">
            <ViewPost/>
          </Route>
          <Route path="/viewComponents">
            <ViewComponents/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default Routes;