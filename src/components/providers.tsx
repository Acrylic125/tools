"use client";
import { useShallow } from "zustand/react/shallow";
import { useThemeStore } from "@/components/theme-store";
import { cn } from "@/lib/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { makeQueryClient } from "@/server/query-client";
import { trpc } from "@/server/client";
import { httpBatchLink } from "@trpc/react-query";
import { getTrpcUrl } from "@/server/utils";

export function ThemeProvider({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const { theme } = useThemeStore(useShallow(({ theme }) => ({ theme })));

  return (
    <body
      className={cn(
        {
          dark: theme === "dark",
        },
        className
      )}
    >
      {children}
    </body>
  );
}

let clientQueryClientSingleton: QueryClient;
function getQueryClient() {
  if (typeof window === "undefined") {
    // Server: always make a new query client
    return makeQueryClient();
  }
  // Browser: use singleton pattern to keep the same query client
  return (clientQueryClientSingleton ??= makeQueryClient());
}

// const queryClient = new QueryClient();

export function Providers({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const queryClient = getQueryClient();
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          // transformer: superjson, <-- if you use a data transformer
          url: getTrpcUrl(),
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <ClerkProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider className={className}>{children}</ThemeProvider>
        </QueryClientProvider>
      </ClerkProvider>
    </trpc.Provider>
  );
}
