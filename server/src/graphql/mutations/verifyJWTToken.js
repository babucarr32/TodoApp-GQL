import { handleVerifyToken } from "../../utils/VerifyToken.js";

export const verifyJWTToken = {
  async verifyJWTToken(_, { token }) {
    return handleVerifyToken(token);
  },
};
