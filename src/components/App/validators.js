// This UI has very minimal validation, and additional validation would exist
// on the backend side. But since JSONPlaceholder does not provide that, we
// have to mock our own validators. This way our UI can have features to show
// possible validation errors from the backend.

function validateUser(allUsers, newUser, setValidationError) {
  let isValid = true;
  let usernameValidationMsg = undefined;
  let emailValidationMsg = undefined;

  if (isUsernameReserved(allUsers, newUser)) {
    usernameValidationMsg = 'Username is already in use.'
    isValid = false;
  }
  if (isEmailReserved(allUsers, newUser)) {
    emailValidationMsg = 'Email address is already in use.'
    isValid = false;
  }

  setValidationError(prevState => ({
    ...prevState,
    'username': usernameValidationMsg,
    'email': emailValidationMsg,
  }));

  return isValid;
}

function isUsernameReserved(allUsers, newUser) {
  return allUsers.find(user => user.username === newUser.username)
    ? true
    : false;
}

function isEmailReserved(allUsers, newUser) {
  return allUsers.find(user => user.email === newUser.email)
    ? true
    : false;
}

export default validateUser;
