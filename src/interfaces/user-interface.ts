export interface UserLogin {
  email: string;
  password: string;
}

export interface UserSignUp {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  gender: string;
}
