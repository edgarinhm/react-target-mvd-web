export interface ProfileUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  username: string;
  gender: string;
  avatar: {
    originalUrl: string;
    normalUrl: string;
    smallThumbUrl: string;
  };
  pushToken?: string;
}
export interface ProfileResponse {
  user: ProfileUser;
}
