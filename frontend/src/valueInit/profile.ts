export interface ProfileTypes {
  email: string;
  username: string;
  profile: {
    id: number;
    address: string;
    fullname: string;
    images: Blob;
    noTelp: string;
  };
  role: object;
}
export const profileInit: ProfileTypes[] = [
  {
    email: "",
    username: "",
    profile: {
      id: 0,
      address: "",
      fullname: "",
      images: new Blob(),
      noTelp: "",
    },
    role: {},
  },
];
