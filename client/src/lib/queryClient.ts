import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

// Static site — no backend API needed.
// All data is computed client-side from trades.ts
export async function apiRequest(method: string, url: string, data?: unknown) {
  console.warn("apiRequest called in static mode:", method, url, data);
}
