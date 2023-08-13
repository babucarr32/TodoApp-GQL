import jwt from "jsonwebtoken";

export const handleGenerateToken = (token) => {
  return jwt.sign(
    {
      data: token,
    },
    "secret",
    { expiresIn: "2m" }
  );
};
