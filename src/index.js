import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import './css/css.css'

import Login from "./pages/Login";
import Overview from "./pages/Overview";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Forgotpassword from "./pages/Forgotpassword";
import Fournulfour from "./pages/Fournulfour";

const Index = () => {
  return (
    <BrowserRouter>
    <div className="app" id="app">
      <Switch>
        <Route path="/landing" component={Landing}/>
        <Route path="/login" component={Login}/>
        <Route path="/forgotpassword" component={Forgotpassword}/>
        <Route path="/register" component={Register}/>
        <Route exact path="/" component={Overview}/>

        <Route path="/" component={Fournulfour}/>
      </Switch>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
