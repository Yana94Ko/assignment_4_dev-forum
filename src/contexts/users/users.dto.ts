export type SignUpHttpRequest = {
  email: string;
  password: string;
  nickname: string;
};
export type SignUpDto = {
  email: string;
  encryptedPassword: string;
  nickname: string;
};
