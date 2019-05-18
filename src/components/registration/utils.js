// Login Component Helpers

// Map of Password Strengths with their respective regex
const strengthsRegex = {
  '8+ characters': '[0-9a-zA-Z !@#$%^&*(),.?":{}|<>]{8,}',
  'lowercase letter': '[a-z]',
  'uppercase letter': '[A-Z]',
  'number': '[0-9]',
  'special character': '[!@#$%^&*(),.?":{}|<>]'
};

// Utility helper function that test password against each strength regex -
// to determine password strength
export const getStrength = password => Object
  .keys(strengthsRegex)
  .reduce(
    (acc, curr) => {
      const re = new RegExp(strengthsRegex[curr]);
      return { ...acc, [curr]: re.test(password) }
    },
    {}
  );

// Utility helper function to determine password validity
export const isEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
