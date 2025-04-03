declare type ApllicationUser = {
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
  user: ApllicationUser;
};

declare type RegisterResponse = {
  token: string;
  user: ApllicationUser;
};
