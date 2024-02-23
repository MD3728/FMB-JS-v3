import React, { Component } from 'react';

class Home extends Component {
  goToLogin(){
    document.location.href = "http://localhost:3000/login";
  }

  goToCreateAccount(){
    document.location.href = "http://localhost:3000/createAccount";
  }

  goToHome(){
    document.location.href = "http://localhost:3000/";
  }

  render() {
    return (
      <div id = "homeDiv">
        {/* Main DIV */}
        <div id = "generalDiv" className = "row">
          {/* Navigation Bar  d-flex*/}
          <nav className="navbar navbar-expand-sm bg-dark">
            <div className="container-fluid">
              <ul className="navbar-nav" id = "generalNav">
                <li id = "homeNav" className = "nav-item">
                  <input type = "submit" className = "btn text-light nav-link btn-dark" value = "Home" onClick = {() => this.goToHome()} />
                </li>
                <li id = "loginNav" className = "nav-item">
                  <input type = "submit" className = "btn text-light nav-link btn-dark" value = "Login" onClick = {() => this.goToLogin()} />
                </li>
              </ul>
            </div>
          </nav>
          <div className = "col-sm-2">        

          </div>      
          <div className = "col-sm-2 middleSection">        

          </div>
          <div id = "mainInfoDiv" className = "col-sm-4 middleSection align-items-center justify-content-center">  
            {/* Unused Property: d-flex */}
            <p id = "descriptionText">
              <strong>
              Description: <br/>
              FMB is a program designed for<br />
              test management within groups<br />
              </strong>
            </p>      
            <p id = "recentUpdateText">
              <strong>Recent Updates: </strong><br />
              FMB JS 1.1.0 has been released! <br />
              Check the readme file for changes and new features OR go to https://github.com/MD3728/FMB-JS for the source code
            </p>
            <div id = "optionLogin">
              <input type = "submit" id = "loginButton" value = "Login" onClick = {this.goToLogin} />
              <h2 id = "inBetweenText">OR</h2>
              <input type = "submit" id = "createAccountButton" value = "Create An Account" onClick = {this.goToCreateAccount}/>
            </div>
          </div>
          <div className = "col-sm-2 middleSection">        

          </div>
          <div className = "col-sm-2">        
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
