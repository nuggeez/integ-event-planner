/* eslint-disable @typescript-eslint/no-explicit-any */
import usePocketBase from "../../hooks/usePocketBase";

import { NavLink, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { AlertTriangleIcon } from "lucide-react";

export default function AuthLoginPage() {
  const { login, user, errorMsg, setErrorMsg } = usePocketBase();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleLogin = async () => {
    if (!email && !password) {
      alert("Fill all the fields.");
      return;
    }

    try {
      setIsLoggingIn(true);
      const logged_in = await login(email, password);

      if (logged_in && user && user.account_type == "Admin") {
        navigate("/admin");
      } else if (user && user.account_type == "Attendee") {
        navigate("/attendee");
      } else if (user && user.account_type == "Event Planner") {
        navigate("/event-planner");
      }
    } catch (err: any) {
      setErrorMsg(err.message || "Error logging in.");
      throw err;
    } finally {
      setIsLoggingIn(false);
    }
  };

  useEffect(() => {
    if (user && user.account_type == "Admin") {
      navigate("/admin");
    } else if (user && user.account_type == "Attendee") {
      navigate("/attendee");
    } else if (user && user.account_type == "Event Planner") {
      navigate("/event-planner");
    }
  }, [user]);

  return (
    <div className="flex w-full flex-col gap-4">
      <div>
        <h1 className="text-3xl font-bold">Sign in</h1>
        <p>Please login to continue.</p>
      </div>
      <div className="flex w-full flex-col gap-4">
        <label className="floating-label">
          <span>Email</span>
          <input
            type="text"
            placeholder="johndoe@example.com"
            className="input input-md w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="floating-label">
          <span>Password</span>
          <input
            type="password"
            placeholder="*********"
            className="input input-md w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div className="flex w-full flex-col">
          <button
            className="btn btn-soft btn-primary"
            onClick={handleLogin}
            disabled={isLoggingIn}
          >
            {isLoggingIn ? "Signing in..." : "Sign in"}
          </button>
          {errorMsg && (
            <div className="bg-warning my-4 flex flex-row items-center gap-4 rounded-3xl p-4">
              <AlertTriangleIcon color="#fefefe" />
              <p className="text-white">{errorMsg}</p>
            </div>
          )}
          <div className="divider text-gray-400">or</div>
          <NavLink to="register" className="btn btn-soft btn-neutral">
            Need an account? Create one
          </NavLink>
        </div>
      </div>
    </div>
  );
}
