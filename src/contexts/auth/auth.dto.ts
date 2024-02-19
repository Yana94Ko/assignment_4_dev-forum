export type LogInHttpRequest = {
  email: string;
  password: string;
};
export type LogInDto = {
  email: string;
  encryptedPassword: string;
};
