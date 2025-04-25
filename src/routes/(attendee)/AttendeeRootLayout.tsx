import { Outlet } from "react-router";
import Sidebar from "../../components/AttendeeSidebar";

export default function AttendeeRootLayout() {
  return (
    <main className="grid min-h-screen grid-cols-[0.2fr_1fr]">
      <Sidebar />
      <Outlet />
    </main>
  );
}
