import React, { createClass } from 'react';

const Signup = createClass({

  // signUserUp(email, password) {
  //   dispatch({
  //     type: 'SIGN_UP',
  //     email,
  //     password
  //   });
  // },
  render() {
    return (
      <div class="container">
      <div class="col-lg-4 col-md-3 col-sm-2"></div>
        <div class="col-lg-4 col-md-6 col-sm-8">
          <div class="logo">
            <h2>youHiredLOGO</h2>
          </div>
          <div class="row loginbox">
            <div class="col-lg-12">
              <span class="singtext" >Sign Up Today! </span>
            </div>
          <div class="col-lg-12 col-md-12 col-sm-12">
            <input class="form-control" type="text" ref={email => this.email = email} placeholder="E-mail" />
          </div>
          <div class="col-lg-12  col-md-12 col-sm-12">
            <input class="form-control" type="password" ref={password => this.password = password} placeholder="Please enter password" />
          </div>
          <div class="col-lg-12  col-md-12 col-sm-12">
            <a href="#" class="btn  submitButton" >Submit </a>
          </div>
        </div>
        <div class="row forGotPassword">
            <a href="#" >Forgot Username / Password? </a>
        </div>
      </div>
      </div>
    );
  }
});
//onSubmit={this.signUserUp(this.email, this.password)}
export default Signup;