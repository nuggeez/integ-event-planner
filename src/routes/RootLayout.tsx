import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

export default function RootLayout() {
  return (
    <main className="flex min-h-screen flex-row">
      <Sidebar />
      <Outlet />
    </main>
  );
}
