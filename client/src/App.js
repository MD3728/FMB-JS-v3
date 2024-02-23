import React, {Component} from 'react';
import './Styling/generalStyle.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Profile from './Pages/profile';
import Login from './Pages/login';
import CreateAccount from './Pages/createAccount';
import Home from './Pages/home';
import TestPage from './Pages/testPage';
import ModifyAccount from './Pages/modifyAccount';
import ModifyTest from './Pages/modifyTest';
import ModifyQuestion from './Pages/modifyQuestion';

//Styling
if (window?.location.pathname === "/login"){
  require('./Styling/loginStyle.css');
}else if (window?.location.pathname === "/createAccount"){
  require('./Styling/createAccountStyle.css');
}else if (window?.location.pathname === "/profile"){
  require('./Styling/profileStyle.css');
}else if (window?.location.pathname === "/test"){
  require('./Styling/testPageStyle.css');
}else if (window?.location.pathname === "/modifyTest"){
  require('./Styling/modifyTestStyle.css');
}else if (window?.location.pathname === "/modifyQuestion"){
  require('./Styling/modifyQuestionStyle.css');
}else if (window?.location.pathname === "/modifyAccount"){
  require('./Styling/modifyAccountStyle.css');
}else if (window?.location.pathname === "/"){
  require('./Styling/homeStyle.css');
}

class App extends Component {
  state = {
    data: null
  };

  callBackendAPI = async () => {
    const response = await fetch('/myresponse');
    const body = await response.json();
    console.log(body)
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  // //Hide Go To Login Button
  // hideButton(e){
  //   document.getElementById("goToLoginButton").style.display = "none";
  // }

  render() {
    return (
      <BrowserRouter>  
        <Routes>
          <Route path = "/login" element = {<Login/>} caseSensitive/>
          <Route path = "/createAccount" element = {<CreateAccount/>} caseSensitive />
          <Route path = "/profile" element = {<Profile/>} caseSensitive />
          <Route path = "/test" element = {<TestPage/>} caseSensitive />
          <Route path = "/modifyAccount" element = {<ModifyAccount/>} caseSensitive />
          <Route path = "/modifyTest" element = {<ModifyTest/>} caseSensitive />
          <Route path = "/modifyQuestion" element = {<ModifyQuestion/>} caseSensitive />
          <Route exact path = "/" element = {<Home/>} caseSensitive />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;


//
// componentDidMount() {
//   this.callBackendAPI()
//     .then(res => this.setState({ data: res.express }))
//     .catch(err => console.log(err));
// }