import { User } from './user-interface';

export default interface SignupRequest {
  user: UserRequest;
}

export interface UserRequest extends User {
  username: string;
  gender: string;
  password_confirmation: string;
}
