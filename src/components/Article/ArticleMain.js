import React from "react";
import { Route } from "react-router-dom";
import ArticleList from "./ArticleList";

const ArticleMain = () => {
  return (
    <div>
      <Route path="/" component={ArticleList} exact />
      {/* <Route path="/write" component={Write} />
        <Route path='/view/:data' component={View} />
        <Route path='/signup' component={Signup} /> */}
    </div>
  );
};

export default ArticleMain;
