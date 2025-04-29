import pb from "../../utils/pocketbase";

import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export default function AuthRootLayout() {
  const navigate = useNavigate();
  const stored = localStorage.getItem("pb_auth");

  useEffect(() => {
    if (stored) {
      const user = JSON.parse(stored || "");
      try {
        pb.authStore.save(user.token, user.record);
        if (!user.token && !user.record) {
          return;
        } else if (user && user.record.account_type == "Attendee") {
          navigate("/attendee");
        } else if (user && user.record.account_type == "Event Planner") {
          navigate("/event-planner");
        }
      } catch (e) {
        console.error("Failed to restore PocketBase auth:", e);
      }
    }
  }, [navigate, stored]);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-sm flex-col items-center justify-center">
      <Outlet />
    </main>
  );
}
