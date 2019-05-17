import React, { Component } from 'react';
import { getStrength, isEmail } from './utils';
import tick from '../../assets/tick.png';
import cancel from '../../assets/cancel.png';
import './style.css';

class LoginForm extends Component {
  // Components State
  state = {};

  componentWillMount() {
    this.loadInitialState();
  }

  // Method to load initial data into the state
  loadInitialState = () => this.setState(
    { 
      email: { value: '', touched: false },
      password: { value: '', touched: false }
    }
  );

  // Method to handle email and paasword inputs
  handleChange = ({ target: { name, value } }) => this.setState({ [name]: { value, touched: true } });

  // Method to handle Login Form Submission
  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    if (!email.touched || !password.touched) {
      Object.keys(this.state).forEach(name => {
        if (!this.state[name].touched) {
          this.handleChange({ target: { name, value: '' } })
        }
      })
    } else {
      // Login Creds Processing Logic Here..

      // But for now, Lets do this!!
      const split = email.value.split('@');
      alert(`Hello ${split[0]}, Welcome to AZOWO Case Study Login Form <3`);
      this.loadInitialState(); // Reset State
    }
  }

  // Method to validate email
  isValidEmail = email => email && isEmail(email);

  // method to render Password Strength indicators
  renderStrengths = (password, strengths) =>
    Object.keys(strengths).map(strength => (
      <p key={strength}>
          <img className="icon" src={strengths[strength] ? tick : cancel} alt="" /> {strength}
      </p>
    ));

  // Method to render Login Form
  render() {
    const { email, password } = this.state;
    const strengths = getStrength(password.value);
    const errEmail = email.touched && !this.isValidEmail(email.value);
    const errPassword = password.touched && !password.value;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="container">
          <h2 className="title">Login</h2>

          <div className="spaceTop">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="test@test.de"
              name="email"
              value={email.value}
              onChange={this.handleChange}
              />
              {errEmail && <p className="errText">Valid Email Required</p>}
          </div>

          <div className="spaceTop">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="password"
              name="password"
              value={password.value}
              onChange={this.handleChange}
              />
              {errPassword && <p className="errText">Password Required</p>}
          </div>

          {password.value ? (
            <div className="strengthMeter spaceTop">
              {this.renderStrengths(password.value, strengths)}
            </div>
          ) : null}
  
          <button className="button spaceTop" type="submit" disabled={errEmail || errPassword}>
            Login
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
