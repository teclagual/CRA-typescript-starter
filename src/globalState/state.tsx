import React from "react";
import { UserProvider } from "./user";

function ProviderComposer({ contexts, children }: any) {
  return contexts.reduceRight(
    (kids: any, parent: any) =>
      React.cloneElement(parent, {
        children: kids
      }),
    children
  );
}

function ContextProvider({ children }: any) {
  return (
    <ProviderComposer contexts={[<UserProvider />]}>
      {children}
    </ProviderComposer>
  );
}

export { ContextProvider };
