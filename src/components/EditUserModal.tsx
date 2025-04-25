import { useState } from "react";

export default function EditUserModal() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const [image, setImage] = useState();

  return (
    <dialog id="edit_user_modal" className="modal">
      <div className="modal-box w-full max-w-lg">
        <h3 className="my-4 text-3xl font-bold">Add new user</h3>
        <div className="flex flex-col gap-2">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Full Name</legend>
            <input type="text" className="input" placeholder="Type here" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input type="text" className="input" placeholder="Type here" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Phone number</legend>
            <label className="input">
              +63
              <input
                type="text"
                className="grow"
                placeholder="9xx-xxx-xxx"
                maxLength={10}
              />
            </label>
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input type="password" className="input" placeholder="Type here" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Role</legend>
            <select defaultValue="Pick a role" className="select">
              <option disabled={true}>Pick a role</option>
              <option>Event Planner</option>
              <option>Attendee</option>
            </select>
            <span className="label">Optional</span>
          </fieldset>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-soft btn-primary">Add</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
