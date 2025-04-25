import { Outlet } from "react-router";

export default function AuthRootLayout() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-sm flex-col items-center justify-center">
      <Outlet />
    </main>
  );
}
