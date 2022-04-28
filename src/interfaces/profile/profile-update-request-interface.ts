export interface UserUpdate {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  gender: string;
  avatar: {
    originalUrl: string;
    normalUrl: string;
    smallThumbUrl: string;
  };
  pushToken: string;
}
export interface ProfileUpdateRequest {
  user: UserUpdate;
}
