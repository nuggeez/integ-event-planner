/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export default function EditEventModal(props: any) {
  const [name, setName] = useState(props.name ?? null);
  const [date, setDate] = useState(props.date ?? null);
  const [startTime, setStartTime] = useState(props.startTime ?? null);
  const [endTime, setEndTime] = useState(props.endTime ?? null);
  const [location, setLocation] = useState(props.location ?? null);
  const [attendeeLimit, setAttendeeLimit] = useState(
    props.attendeeLimit ?? null,
  );
  const [description, setDescription] = useState(props.description ?? null);
  const [eventType, setEventType] = useState(props.eventType) ?? null;
  const [image, setImage] = useState(props.image ?? null);

  return (
    <dialog id="edit_event_modal" className="modal">
      <div className="modal-box w-full max-w-3xl">
        <h3 className="my-4 text-lg font-bold">Edit event</h3>
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
              <select defaultValue="Pick a event type" className="select">
                <option disabled={true}>Pick a event type</option>
                <option>Wedding</option>
                <option>School</option>
                <option>Government</option>
                <option>Corporate</option>
                <option>Virtual</option>
              </select>
              <span className="label">Optional</span>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Event image</legend>
              <input type="file" className="file-input" />
              <label className="label">Max size 2MB</label>
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Event description</legend>
              <textarea
                className="textarea h-36 resize-none"
                placeholder="Description on the event"
              ></textarea>
              <div className="label">Optional</div>
            </fieldset>
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
