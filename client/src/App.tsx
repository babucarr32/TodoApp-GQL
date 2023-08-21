import { useEffect, useState } from "react";
import { TableDemo } from "./components/Table";
import { ComboboxDemo } from "./components/ComboBox";
import AddTodo from "./components/AddTodo";
import SearchTodoContainer from "./components/SearchTodoContainer";
import Login from "./components/Login";
import APOLLOProvider from "./providers/ApolloProvider";
import { VERIFY_USER_TOKEN } from "./graphql/query";
import { useMutation } from "@apollo/client";
import AppButton from "./components/AppButton";
import useLogout from "./hooks/useLogout";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [verifyToken] = useMutation(VERIFY_USER_TOKEN);
  const [LogOut] = useLogout();

  useEffect(() => {
    const token = localStorage.getItem("todoToolkit");
    const handleVerifyToken = async () => {
      if (token) {
        const result = await verifyToken({
          variables: {
            token: token,
          },
        });
        setIsAuthenticated(result.data.verifyJWTToken as any);
      }
    };
    handleVerifyToken();
  }, []);

  return (
    <APOLLOProvider>
      {!isAuthenticated ? (
        <Login />
      ) : (
        <div className="min-h-[100vh] relative flex items-center w-full justify-center bg-slate-900 p-5">
          <div className="w-full md:w-[70%] overflow-scroll">
            <div className="  p-5 bg-slate-950 my-3 rounded-lg relative ">
              <div className="flex items-center justify-between">
                <p className="text-[1.25em] md:text-[2em] font-extrabold text-center text-white">
                  A list of Todo's
                </p>
                <AppButton
                  onClick={LogOut}
                  text="Logout"
                  className="bg-white h-[50px] text-black w-24 rounded-lg font-bold md:absolute md:right-5 m:top-5 hover:bg-slate-200"
                />
              </div>
              <div className="flex flex-col md:flex-row w-full justify-between gap-3 md:gap-10 pt-5 text-white">
                <AddTodo />
                <SearchTodoContainer />
              </div>
            </div>
            <div className="w-full overflow-scroll">
              <TableDemo />
            </div>
            <div className="my-3">
              <ComboboxDemo />
            </div>
          </div>
        </div>
      )}
    </APOLLOProvider>
  );
}

export default App;
