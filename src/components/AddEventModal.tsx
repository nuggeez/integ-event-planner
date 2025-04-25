export default function AddEventModal() {
  return (
    <dialog id="add_event_modal" className="modal">
      <div className="modal-box w-full max-w-3xl">
        <h3 className="my-4 text-lg font-bold">Create new event</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-sm text-gray-400">Event details</h1>
            <input
              className="input validator"
              type="text"
              required
              placeholder="Event name"
            />
            <label className="input">
              <span className="label">Event date</span>
              <input type="date" required />
            </label>
            <label className="input">
              <span className="label">Start time</span>
              <input type="time" required />
            </label>
            <label className="input">
              <span className="label">End time</span>
              <input type="time" required />
            </label>
            <label className="input">
              <span className="label">Location</span>
              <input type="text" required />
            </label>
            <label className="input">
              <span className="label">Attendee limit</span>
              <input type="number" required />
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-sm text-gray-400">Additional information</h1>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Event type</legend>
              <select defaultValue="Pick a browser" className="select">
                <option disabled={true}>Pick a browser</option>
                <option>Wedding</option>
                <option>School</option>
                <option>Government</option>
                <option>Corporate</option>
                <option>Virtual</option>
              </select>
              <span className="label">Optional</span>
            </fieldset>
            <label className="input">
              <span className="label">Event date</span>
              <input type="date" required />
            </label>
            <label className="input">
              <span className="label">Start time</span>
              <input type="time" required />
            </label>
            <label className="input">
              <span className="label">End time</span>
              <input type="time" required />
            </label>
          </div>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
