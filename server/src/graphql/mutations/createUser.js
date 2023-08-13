import { handleCreateUser } from "../../actions/handleCreateUser.js";

export const CreateUser = {
  async createUser(
    _,
    { userInput: { fullName, email, password, rePassword } }
  ) {
    const result = await handleCreateUser(
      fullName,
      email,
      password,
      rePassword
    );
    return result;
  },
};
