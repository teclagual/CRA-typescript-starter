import React, { useState, createContext } from "react";

export interface User {
  username?: string;
  id?: number;
}

export interface UserContextInterface {
  value?: User;
  setValue: Function;
}

export const UserContext = createContext<UserContextInterface>({
  value: undefined,
  setValue: () => "set"
});

export function UserProvider(props: any) {
  const [value, setValue] = useState<User>({ username: "hello", id: 1 });

  console.log("UserContext changed: ", value);
  return (
    <UserContext.Provider value={{ value, setValue }}>
      {props.children}
    </UserContext.Provider>
  );
}
