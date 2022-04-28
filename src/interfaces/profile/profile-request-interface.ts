interface ProfileUserRequest {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  gender: string;
  username: string;
  avatar: string;
}
export interface ProfileRequest {
  user: ProfileUserRequest;
}
