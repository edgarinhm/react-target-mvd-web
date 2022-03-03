export default interface SignupRequest {
  user: {
    username?: string;
    gender?: string;
    email?: string;
    password?: string;
    password_confirmation?: string;
  };
}
