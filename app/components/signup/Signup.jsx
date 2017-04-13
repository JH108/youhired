import React, { createClass, PropTypes } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../api/users';
import { Link } from 'react-router-dom';

const Signup = createClass({
  displayName: 'Signup',

  propTypes: {
    onSignUp: PropTypes.func.isRequired
  },

  onSignUp(event) {
    event.preventDefault();
    this.props.onSignUp({
      email: this.emailInput.value,
      password: this.passwordInput.value
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
              <span className="singtext" >Sign Up Today! </span>
            </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <input className="form-control" type="text" ref={email => this.emailInput = email} placeholder="E-mail" />
          </div>
          <div className="col-lg-12  col-md-12 col-sm-12">
            <input className="form-control" type="password" ref={password => this.passwordInput = password} placeholder="Please enter password" />
          </div>
          <div className="col-lg-12  col-md-12 col-sm-12">
            <button onClick={this.onSignUp} className="btn  submitButton" >
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

const mapActionsToProps = {
  onSignUp: signUp
};
//onSubmit={this.signUserUp(this.email, this.password)}
export default connect(null, mapActionsToProps)(Signup);