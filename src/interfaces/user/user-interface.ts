export interface User {
  email: string;
  password: string;
  username?: string;
  id?: string;
}

export interface UserLogin extends User {}

export interface UserSignUp extends User {
  name: string;
  passwordConfirm: string;
  gender: string;
}
