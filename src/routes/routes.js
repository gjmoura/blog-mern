import React from "react";
import ViewLogin from  '../views/viewLogin.jsx'
import ViewRegister from  '../views/viewRegister.jsx'
import ViewRegisterPost from  '../views/viewRegisterPost.jsx'
import ViewFeed from '../views/viewFeed.jsx'
import ViewProfile from '../views/viewProfile.jsx'
import ViewPost from '../views/viewPost'
import ReactDOM from "react-dom";
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
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/viewRegister">Registro</Link>
          </li>
          <li>
            <Link to="/viewRegisterPost">Registro de Postagem</Link>
          </li>
          <li>
            <Link to="/viewFeed">Feed</Link>
          </li>
          <li>
            <Link to="/viewProfile">Perfil</Link>
          </li>
          <li>
            <Link to="/viewPost">Postagem</Link>
          </li>
        </ul>

        <hr />

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
        </Switch>
      </Router>
      
    </div>
  );
}

export default Routes;