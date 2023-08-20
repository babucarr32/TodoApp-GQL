import jwt from "jsonwebtoken";
import "dotenv/config";

export const handleVerifyToken = (context) => {
  // const authHeader = context.req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split("Bearer ")[1];
    if (token) {
      return jwt.verify(
        token,
        process.env.AccessToken,
        function (err, decoded) {
          if (decoded) {
            return true;
          } else {
            return false;
          }
        }
      );
    }
    throw new Error("Authentication token must be 'Bearer [token]");
  }
  throw new Error("Authorization header must be provided");
};
