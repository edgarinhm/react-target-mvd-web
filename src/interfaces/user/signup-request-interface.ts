export default interface SignupRequest {
  user: {
    username?: string;
    email?: string;
    gender?: string;
    password?: string;
    password_confirmation?: string;
  };
}
