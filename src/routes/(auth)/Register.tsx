import { NavLink } from "react-router";

export default function AuthRegisterPage() {
  return (
    <div className="flex w-full flex-col gap-2">
      <div>
        <h1 className="text-3xl font-bold">Sign up</h1>
        <p>Join us now!</p>
      </div>
      <div className="flex w-full flex-col gap-1">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Full name</legend>
          <input type="text" className="input w-full" placeholder="John Doe" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Phone Number</legend>
          <input
            type="text"
            className="input w-full"
            placeholder="+63 967 394 8732"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Email</legend>
          <input
            type="text"
            className="input w-full"
            placeholder="johndoe@example.com"
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Password</legend>
          <input type="text" className="input w-full" placeholder="*********" />
        </fieldset>
        <div className="flex w-full flex-col">
          <button className="btn btn-soft btn-primary">Sign up</button>
          <div className="divider text-gray-400">or</div>
          <NavLink to="/" className="btn btn-soft btn-neutral">
            Already have an account? Sign in
          </NavLink>
        </div>
      </div>
    </div>
  );
}
