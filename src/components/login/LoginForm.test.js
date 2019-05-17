import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';
import { getStrength, isEmail } from './utils';

describe('Login Form Test Suit', () => {
  it('should render login form properly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoginForm />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('Login Form Utility Functions', () => {
    describe('Password Strength', () => {
      const goodPassword = getStrength('passTEST#1');
      const weakPassword = getStrength('123');

      it('should determine `GOOD` password', () => {
        expect(goodPassword['8+ characters']).toBe(true);
        expect(goodPassword['lowercase letter']).toBe(true);
        expect(goodPassword['uppercase letter']).toBe(true);
        expect(goodPassword['number']).toBe(true);
        expect(goodPassword['special character']).toBe(true);
      });

      it('should determine `WEAK` password', () => {
        expect(weakPassword['8+ characters']).toBe(false);
        expect(weakPassword['lowercase letter']).toBe(false);
        expect(weakPassword['uppercase letter']).toBe(false);
        expect(weakPassword['number']).toBe(true);
        expect(weakPassword['special character']).toBe(false);
      });
    });

    describe('Email Validity', () => {
      const validEmail = isEmail('umar@azowo.com');
      const invalidEmail  = isEmail('umarATSomewhere.com');

      it('should determine `valid` email', () => {
        expect(validEmail).toBe(true);
      });
      
      it('should determine `invalid` email', () => {
        expect(invalidEmail).toBe(false);
      });
    });
  });
});
