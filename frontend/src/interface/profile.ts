export type ProfileTypes = {
  id: number;
  address: string;
  fullname: string;
  images: string;
  noTelp: string;
};

export type UserTypes = {
  email: string;
  username: string;
  profile: ProfileTypes;
  role: object;
};
