declare namespace Express {
  interface Request {
    user?: { id: number; encryptedPassword: string };
  }
}
