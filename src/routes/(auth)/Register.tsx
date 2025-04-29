import usePocketBase from "../../hooks/usePocketBase";

import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { AlertTriangleIcon } from "lucide-react";

export default function AuthRegisterPage() {
  const { register, errorMsg, user } = usePocketBase();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("Attendee");

  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegister = async () => {
    if (!name && !phoneNumber && !email && !password && !type) {
      alert("Fill all the fields.");
      return;
    }

    try {
      setIsRegistering(true);
      const registered = await register(
        name,
        phoneNumber,
        email,
        password,
        type,
      );

      if (registered && type == "Attendee") {
        setIsRegistering(false);
        navigate("/attendee");
      } else if (registered && type == "Event Planner") {
        setIsRegistering(false);
        navigate("/event-planner");
      }
    } catch (err) {
      console.log(err);
      throw err;
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
    <div className="flex w-full flex-col gap-2">
      <div>
        <h1 className="text-3xl font-bold">Sign up</h1>
        <p>Join us now!</p>
      </div>
      <div className="flex w-full flex-col gap-1">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Full name</legend>
          <input
            type="text"
            className="input validator w-full"
            placeholder="John Doe"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Phone Number</legend>
          <input
            type="text"
            className="input validator w-full"
            placeholder="+63 967 394 8732"
            maxLength={13}
            value={phoneNumber}
            required
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Email</legend>
          <input
            type="text"
            className="input validator w-full"
            placeholder="johndoe@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Password</legend>
          <input
            type="password"
            className="input validator w-full"
            placeholder="*********"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </fieldset>
        <fieldset className="fieldset gap-2">
          <legend className="fieldset-legend">Type</legend>
          <div className="flex flex-row items-center gap-2">
            <input
              type="radio"
              name="radio-1"
              className="radio"
              defaultChecked
              value="Attendee"
              onChange={(e) => setType(e.target.value)}
            />
            <p>Attendee</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <input
              type="radio"
              name="radio-1"
              className="radio"
              value="Event Planner"
              onChange={(e) => setType(e.target.value)}
            />
            <p>Event Planner</p>
          </div>
        </fieldset>
        <div className="flex w-full flex-col">
          <button
            className="btn btn-soft btn-primary"
            onClick={handleRegister}
            disabled={isRegistering}
          >
            {isRegistering ? "Signing up..." : "Sign up"}
          </button>
          {errorMsg && (
            <div className="bg-warning my-4 flex flex-row items-center gap-4 rounded-3xl p-4">
              <AlertTriangleIcon color="#fefefe" />
              <p className="text-white">{errorMsg}</p>
            </div>
          )}
          <div className="divider text-gray-400">or</div>
          <NavLink to="/" className="btn btn-soft btn-neutral">
            Already have an account? Sign in
          </NavLink>
        </div>
      </div>
    </div>
  );
}
