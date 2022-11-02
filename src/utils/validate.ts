// uility functions
const validUsername = (username: string): boolean => {
  if (username.length < 6) {
    return false;
  }
  return true;
};

const validPassword = (password: string): boolean => {
  if (password.length < 6) {
    return false;
  }
  return true;
};

const validEmail = (email: string) => {
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export { validUsername, validPassword, validEmail };
