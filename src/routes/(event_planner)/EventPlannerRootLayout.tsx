import { Outlet } from "react-router";
import Sidebar from "../../components/EventPlannerSidebar";

export default function EventPlannerRootLayout() {
  return (
    <main className="grid min-h-screen grid-cols-[0.2fr_1fr]">
      <Sidebar />
      <Outlet />
    </main>
  );
}
