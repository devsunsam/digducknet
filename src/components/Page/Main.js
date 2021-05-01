import React from "react";
import "./Main.css";
import { Route } from "react-router-dom";
import List from "./List"
import Write from "./Write"
import View from "./View"
import Signup from "./Signup"
import Right_write from "./Right/Right_write"


const Main=()=>{
  return (
    <div>
      <div>
        <Route path="/" component={List} exact />
        <Route path="/write" component={Write} />
        <Route path='/view/:data' component={View} />
        <Route path='/signup' component={Signup} />
      </div>

      <div>
        <Route path="/write" component={Right_write} />
      </div>
    </div>
  );
}

export default Main;
