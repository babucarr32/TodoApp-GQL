import jwt from "jsonwebtoken";
import "dotenv/config";

export const handleVerifyToken = (token) => {
  return jwt.verify(token, process.env.AccessToken, function (err, decoded) {
    if (decoded) {
      return true;
    } else {
      return false;
    }
  });
};
