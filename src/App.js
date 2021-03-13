import React from "react";
import {BrowserRouter as Router, Route,browserHistory,Switch,Redirect} from 'react-router-dom';
import "./App.js";
import './App.scss';
import "antd/dist/antd.css";
import OtpPage from "./Components/otpPage.js";
import PasswordPage from "./Components/passwordPage.js";
import DashBoard from "./Components/dashBoard.js";
import HomePage from "./Pages/Index";
import UploadFiles from "./Components/uploadFile.js";
import Table from "./Components/table.js";



function App(){
  return (
    
    <div className='App'>
      <Router>
      
      <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/otp" exact component={OtpPage} />
      <Route path="/password" exact component={PasswordPage} />
      <Route path="/dashboard" exact component={DashBoard} />
      <Route path="/uploadfile" exact component={UploadFiles} />
      <Route path="/table" exact component={Table} />
      </Switch>
      
     
    </Router>
    </div>
    
  )
}

export default App;