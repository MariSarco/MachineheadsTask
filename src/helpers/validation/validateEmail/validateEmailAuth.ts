import { emailRegExp, emailErrors } from './constants';

function validateEmailForAuth(email: string) {
  const isEmailValid = emailRegExp.test(email);
  if (isEmailValid) return true;
  return getErrorMessageForAuth(email);
}

function getErrorMessageForAuth(email: string) {
  if (email.length === 0) {
    return emailErrors.emptyField;
  }
  return emailErrors.incorrectEmail;
}

export default validateEmailForAuth;
