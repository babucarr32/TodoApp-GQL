import React from "react";

function useLogout(): [LogOut: () => void] {
  const Logout = () => {
    localStorage.setItem("todoToolkit", "");
    window.location.reload();
  };
  return [Logout];
}

export default useLogout;
