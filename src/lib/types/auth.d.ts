declare type ApplicationUser = {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  isVerified: boolean;
};

declare type LoginResponse = {
  token: string;
  user: ApplicationUser;
};

declare type RegisterResponse = {
  token: string;
  user: ApplicationUser;
};

declare type ForgotPasswordResponse = {
  info: string;
};

declare type SetPasswordResponse = {
  token: string;
};
