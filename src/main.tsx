import Home from "./routes/Home.tsx";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "../global.css";
import PublishedEventsPage from "./routes/(events)/PublishedEvents.tsx";
import RootLayout from "./routes/RootLayout.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
});

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "published_events", Component: PublishedEventsPage },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />,
  </QueryClientProvider>,
);
