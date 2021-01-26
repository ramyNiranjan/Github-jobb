import React, { createContext, useState, useRef } from "react";

const UserActionsContext = createContext();
function UserActionsProvider({ children }) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  return (
    <UserActionsContext.Provider
      value={{
        input,
        setInput,
        inputRef,
      }}
    >
      {children}
    </UserActionsContext.Provider>
  );
}

export { UserActionsContext, UserActionsProvider };
