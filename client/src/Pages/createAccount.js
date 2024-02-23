//Login Page
import React, { Component } from 'react';

class CreateAccount extends Component{
  constructor(){
    super();
    this.state = 
    {
      data: null
    };
  }

  //Navigation Methods
  goToHome(){
    document.location.href = "http://localhost:3000/";
  }

  goToLogin(){
    document.location.href = "http://localhost:3000/login";
  }

  //Update Text Boxes
  changeTextBox = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  //Create New Account
  addNewAccount = async (e) => {
    let givenUsername = document.getElementById("usernameCreate").value;
    let givenPassword = document.getElementById("passwordCreate").value;
    let givenConfirm = document.getElementById("passwordConfirmCreate").value;
    //Check Password
    if ((givenPassword !== givenConfirm)||(givenPassword.length === 0)){
      document.getElementById("passwordWarning").style.display = "block";
      document.getElementById("usernameWarning").style.display = "none";
      return 1;
    }
    //Check Username 
    let finalResponse = [];
    await fetch("http://localhost:3001/selectAllAccount", {method: "POST", headers: {"Content-Type": "application/JSON"}})
    .then(data => {return data.json()})
    .then(data => {console.log(data); finalResponse = data})
    .catch(error => console.log(error));
    for (let currentAccount of finalResponse){
      if (currentAccount.Username === givenUsername){//Cannot have identical username
        document.getElementById("usernameWarning").style.display = "block";
        document.getElementById("passwordWarning").style.display = "none";
        return 2;
      }
    }
    if (window.confirm("Do You Want To Create This Account?")){//Verification
      let sqlQuery = `INSERT INTO Accounts (Username, Password, Tests) VALUES ('${document.getElementById("usernameCreate").value}','${document.getElementById("passwordCreate").value}','');`
      e.preventDefault();
      fetch("http://localhost:3001/queryCommand", {
        method: "POST",
        headers: {"Content-Type": "text/plain"},
        body: sqlQuery
      });
      document.location.href = "http://localhost:3000/login";
    }else{
      console.log("Action Canceled");
    }
  }

  render() {
    return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-sm bg-dark">
        <div className="container-fluid">
          <ul className="navbar-nav" id = "generalNav">
            <li id = "loginNav" className = "nav-item">
              <input type = "submit" className = "btn text-light nav-link btn-dark" value = "Login" onClick = {() => {this.goToLogin()}}/>
            </li>
            <li id = "homeNav" className = "nav-item">
              <input type = "submit" className = "btn text-light nav-link btn-dark" value = "Home" onClick = {() => {this.goToHome()}} />
            </li>
          </ul>
        </div>
      </nav>
      {/* Create Account */}
      <div id = "generalDiv" className = "row">
        <div className = "col-sm-2">        

        </div>      
        <div id = "mainInfoDiv" className = "col-sm-8 middleSection align-items-center justify-content-center">  
          <div id = "createDiv">
            <p id = "usernameWarning">Username already exists, Use a different one</p>
            <p id = "passwordWarning">Passwords do not match or Type in a password</p>
            <h1 id = "createAccountText">Create Account</h1>
            <p id = "createUsernameText">Username:</p>
            <p id = "createPasswordText">Password:</p>
            <p id = "createConfirmPasswordText">Confirm Password:</p>
            <input type = "text" name = "newUsername" id = "usernameCreate" onChange = {this.changeTextBox} />
            <input type = "password" name = "newPassword" id = "passwordCreate" onChange = {this.changeTextBox} />
            <input type = "password" name = "newConfirmPassword" id = "passwordConfirmCreate" onChange = {this.changeTextBox} />
            <input type = "submit" name = "create" id = "createButton" value = "Create Account" onClick = {this.addNewAccount} />
          </div>
        </div>
        <div className = "col-sm-2">   

        </div>
      </div>
{/* npm run build
npm install -g serve
serve -s build */}
    </div>
    );
  }
}

export default CreateAccount;


