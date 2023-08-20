import { useEffect, useState } from "react";
import { TableDemo } from "./components/Table";
import { ComboboxDemo } from "./components/ComboBox";
import AddTodo from "./components/AddTodo";
import SearchTodoContainer from "./components/SearchTodoContainer";
import Login from "./components/Login";
import APOLLOProvider from "./providers/ApolloProvider";
import { VERIFY_USER_TOKEN } from "./graphql/query";
import { useMutation } from "@apollo/client";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [verifyToken] = useMutation(VERIFY_USER_TOKEN);

  useEffect(() => {
    const token = localStorage.getItem("todoToolkit");

    const handleVerifyToken = async () => {
      if (token) {
        const result = await verifyToken({
          variables: {
            token: token,
          },
        });
        setIsAuthenticated(result as any);
      }
    };
    handleVerifyToken();
  }, []);

  return (
    <APOLLOProvider>
      {!isAuthenticated ? (
        <Login />
      ) : (
        <div className="h-[100vh] flex items-center w-full justify-center bg-slate-900">
          <div className="w-[70%]">
            <div className="p-5 bg-slate-950 my-3 rounded-lg">
              <p className="text-[2em] font-extrabold text-center text-white">
                A list of Todo's
              </p>
              <div className="flex justify-between gap-3">
                <AddTodo />
                <SearchTodoContainer />
              </div>
            </div>
            <TableDemo />
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
