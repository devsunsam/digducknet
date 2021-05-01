import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import "./App.css";
// import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';


import Header from "./components/Header/Header";
import Main from "./components/Page/Main";
import ArticleMain from "./components/Article/ArticleMain"
// import AppLayout from "./components/AppLayout";

const App = () => {
  

  return (  
    <div>     
      <div>
        <Header />
      </div>
      <div className="row">
        <div className="col-md-2 bg-dark d-none d-xl-flex">
          
        </div>
        <div className="col-xl-5">
          <ArticleMain/>
          {/* <Main /> */}
        </div>
        <div className="col-xl-2 bg-info">
        </div>
        <div className="col-md-3 bg-dark d-none d-xl-flex">
        </div>
      </div>
    </div>
  );
};

export default App;
