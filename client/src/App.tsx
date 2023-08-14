import { useState } from "react";
import { TableDemo } from "./components/Table";
import { ComboboxDemo } from "./components/ComboBox";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import AddTodo from "./components/AddTodo";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="h-[100vh] flex items-center w-full justify-center bg-slate-900">
        <div className="w-[70%]">
          <div className="p-5 bg-slate-950 my-3 rounded-lg">
            <p className="text-[2em] font-extrabold text-center text-white">
              A list of Todo's
            </p>
            <div className="flex justify-between gap-3">
              <AddTodo />
              <form className="w-full">
                <input
                  type="text"
                  placeholder="Search todo..."
                  className="w-full p-3 rounded-lg bg-transparent border-2 border-slate-800 outline-none text-white mt-5"
                />
              </form>
            </div>
          </div>
          <TableDemo />
          <div className="my-3">
            <ComboboxDemo />
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
