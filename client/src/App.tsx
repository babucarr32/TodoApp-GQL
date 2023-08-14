import { useState } from "react";
import { TableDemo } from "./components/Table";
import { ComboboxDemo } from "./components/ComboBox";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import Client from "./components/Client";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Client />
      <div className="h-[100vh] flex items-center w-full justify-center bg-slate-900">
        <div className="w-[70%]">
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
