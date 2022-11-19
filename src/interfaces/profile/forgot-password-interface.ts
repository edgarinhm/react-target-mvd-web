export interface ForgotPassword {
  email: string;
}
export interface ResetPassword extends ForgotPassword {
  redirectUrl: string;
}
