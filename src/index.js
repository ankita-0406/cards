import React from "react";
import ReactDOM from "react-dom";
import Card from "./component/card";
import {Link, Route, BrowserRouter as Router} from "react-router-dom";
import ViewMore from "./component/viewMore";

const App=()=>{
    return(
        <div>
        <Router>
       
    <Route path="/" exact component={Card}></Route>
    <Route path="/viewMore" exact component={ViewMore}></Route>
  </Router>

       
        </div>
        
    )
}
ReactDOM.render(<App/>, document.querySelector("#root"));