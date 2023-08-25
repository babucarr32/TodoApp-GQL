import { handleVerifyToken } from "../../utils/VerifyToken";

export const verifyJWTToken = {
  async verifyJWTToken(_, { token }) {
    return handleVerifyToken(token);
  },
};
