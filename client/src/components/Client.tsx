import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TODOS_QUERY } from "./query";

function Client() {
  const { loading, error, data } = useQuery(GET_TODOS_QUERY, {
    variables: { amount: 10 }, // Pass your variables here
  });

  console.log(data, error, loading);
  return <div>Client</div>;
}

export default Client;
