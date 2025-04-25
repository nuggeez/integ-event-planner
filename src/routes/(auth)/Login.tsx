import { NavLink } from "react-router";

export default function AuthLoginPage() {
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
          />
        </label>
        <label className="floating-label">
          <span>Password</span>
          <input
            type="password"
            placeholder="*********"
            className="input input-md w-full"
          />
        </label>
        <label className="label">
          <input type="checkbox" defaultChecked className="checkbox" />
          Keep me logged in
        </label>
        <div className="flex w-full flex-col">
          <button className="btn btn-soft btn-primary">Sign in</button>
          <div className="divider text-gray-400">or</div>
          <NavLink to="register" className="btn btn-soft btn-neutral">
            Need an account? Create one
          </NavLink>
        </div>
      </div>
    </div>
  );
}
