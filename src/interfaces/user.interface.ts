export default interface UserLogin {
  email: string;
  password: string;
}

export default interface UserSignUp {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  gender: string;
}
