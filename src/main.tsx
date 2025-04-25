import AdminRootLayout from "./routes/(admin)/AdminRootLayout.tsx";
import AdminPublishedEventsPage from "./routes/(admin)/(events)/PublishedEvents.tsx";
import AdminDraftEventsPage from "./routes/(admin)/(events)/DraftEvents.tsx";
import AdminManageUsersPage from "./routes/(admin)/(users)/ManageUsers.tsx";
import AdminHomePage from "./routes/(admin)/Home.tsx";

import EventPlannerRootLayout from "./routes/(event_planner)/EventPlannerRootLayout.tsx";
import EventPlannerHomePage from "./routes/(admin)/Home.tsx";
import EventPlannerUpcomingEventsPage from "./routes/(event_planner)/(events)/UpcomingEvents.tsx";
import EventPlannerPastEventsPage from "./routes/(event_planner)/(events)/PastEvents.tsx";
import EventPlannerDraftEventsPage from "./routes/(event_planner)/(events)/DraftEvents.tsx";
import EventPlannerManageVendorsPage from "./routes/(event_planner)/(vendors)/ManageVendors.tsx";
import EventPlannerManageAttendeesPage from "./routes/(event_planner)/(attendees)/ManageAttendees.tsx";

import AuthRootLayout from "./routes/(auth)/RootLayout.tsx";
import AuthLoginPage from "./routes/(auth)/Login.tsx";
import AuthRegisterPage from "./routes/(auth)/Register.tsx";

import AttendeeRootLayout from "./routes/(attendee)/AttendeeRootLayout.tsx";
import AttendeeHomePage from "./routes/(attendee)/Home.tsx";
import AttendeeUpcomingEventsPage from "./routes/(attendee)/(events)/UpcomingEvents.tsx";
import AttendeePastEventsPage from "./routes/(attendee)/(events)/PastEvents.tsx";

import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "../global.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
});

const router = createBrowserRouter([
  {
    Component: AuthRootLayout,
    children: [
      { index: true, Component: AuthLoginPage },
      { path: "register", Component: AuthRegisterPage },
    ],
  },
  {
    Component: AdminRootLayout,
    path: "/admin",
    children: [
      { index: true, Component: AdminHomePage },
      { path: "published-events", Component: AdminPublishedEventsPage },
      { path: "draft-events", Component: AdminDraftEventsPage },
      { path: "manage-users", Component: AdminManageUsersPage },
    ],
  },
  {
    Component: EventPlannerRootLayout,
    path: "/event-planner",
    children: [
      { index: true, Component: EventPlannerHomePage },
      { path: "upcoming-events", Component: EventPlannerUpcomingEventsPage },
      { path: "past-events", Component: EventPlannerPastEventsPage },
      { path: "draft-events", Component: EventPlannerDraftEventsPage },
      { path: "manage-vendors", Component: EventPlannerManageVendorsPage },
      { path: "manage-attendees", Component: EventPlannerManageAttendeesPage },
    ],
  },
  {
    Component: AttendeeRootLayout,
    path: "/attendee",
    children: [
      { index: true, Component: AttendeeHomePage },
      { path: "upcoming-events", Component: AttendeeUpcomingEventsPage },
      { path: "past-events", Component: AttendeePastEventsPage },
      { path: "feedbacks" },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />,
  </QueryClientProvider>,
);
