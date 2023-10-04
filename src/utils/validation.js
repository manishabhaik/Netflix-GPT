export const checkValidData = (username,email, password) => {

    if (username != null) {
      const isUsername = /^[a-zA-Z0-9]+$/.test(username);
      if (!isUsername) {
        return { username: "Please enter a valid username !" };
      }
    }

  const isEmailValid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const isPasswordValid = /^[A-Za-z]\w{7,14}$/.test(password);

   if (!isEmailValid && !isPasswordValid) {
     return {
       email: "Please enter a valid email address !",
       password: "Password is not valid !",
     };
   }
  if (!isEmailValid) {
    return { email: "Please enter a valid email address!" };
  }

  if (!isPasswordValid) {
    return { password: "Password is not valid !" };
  }

  return null;
};
