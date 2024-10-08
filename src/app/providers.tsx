"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "./authenticate/usecontext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <UserProvider>{children}</UserProvider>
    </ChakraProvider>
  );
}
