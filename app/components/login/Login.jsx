import React, { createClass, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn, getUserData } from '../../api/users';

const Login = createClass({
  displayName: 'Login',

  propTypes: {
    onSignIn: PropTypes.func.isRequired,
    getData: PropTypes.func.isRequired
  },

  onSignIn(event) {
    event.preventDefault();

    this.props.onSignIn({
      useremail: this.emailInput.value,
      userpassword: this.passwordInput.value
    })
    .then(() => {
      if (sessionStorage.getItem('auth')) {
        this.props.getData();
        this.props.history.push('/dashboard');
      }
    });

    this.emailInput.value = '';
    this.passwordInput.value = '';
  },

  render() {
    return (
      <div>
        <div className="col-lg-4 col-md-3 col-sm-2"></div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="logo">
              <img src='images/logo.png' alt="" />
            </div>
            <div className="row loginbox">
              <div className="col-lg-12">
                <span className="singtext" >Login</span>
              </div>
            <div className="col-lg-12 col-md-12 col-sm-12">
              <input className="form-control" type="text" ref={email => this.emailInput = email} placeholder="E-mail" />
            </div>
            <div className="col-lg-12  col-md-12 col-sm-12">
              <input className="form-control" type="password" ref={password => this.passwordInput = password} placeholder="Please enter password" />
            </div>
            <div className="col-lg-12  col-md-12 col-sm-12">

              <button onClick={this.onSignIn} className="btn  submitButton">
                <Link style={{ color: 'white' }} to='/dashboard'>Submit</Link>
              </button>

            </div>
          </div>
          <div className="row forGotPassword">
              <a href="#" >Forgot Username / Password? </a>
          </div>
        </div>
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {

  }
};

const mapActionsToProps = {
  onSignIn: signIn,
  getData: getUserData
};

export default connect(null, mapActionsToProps)(Login);
