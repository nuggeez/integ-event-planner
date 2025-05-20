import AddEventModal from "../../../components/AddEventModal";
import EditEventModal from "../../../components/EditEventModal";
import Header from "../../../components/Header";

import { ArrowDownUp, Plus, Pencil, Trash2 } from "lucide-react";

export default function EventPlannerDraftEventsPage() {
  const handleAddModal = () => {
    const modal = document.getElementById(
      "add_event_modal",
    ) as HTMLDialogElement | null;

    if (modal) {
      modal.showModal();
    } else {
      console.error("Modal element not found");
    }
  };

  const handleEditModal = () => {
    const modal = document.getElementById(
      "edit_event_modal",
    ) as HTMLDialogElement | null;

    if (modal) {
      modal.showModal();
    } else {
      console.error("Edit modal not found");
    }
  };

  return (
    <div className="flex flex-col gap-12 bg-gray-100">
      <Header link_left={"Events"} link_right={"Draft events"} />
      <div className="flex flex-col gap-4 px-8">
        <div className="flex w-full items-center justify-between rounded-3xl bg-white p-4">
          <div className="flex items-center gap-4">
            <ArrowDownUp className="cursor-pointer" />
            <Plus className="cursor-pointer" onClick={handleAddModal} />
            <Trash2 className="cursor-pointer" />
          </div>
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" className="grow" placeholder="Search" />
          </label>
        </div>
        <div className="overflow-x-auto">
          <table className="table rounded-3xl bg-white">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Event Name</th>
                <th>Type</th>
                <th>Location</th>
                <th>Date</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div>
                    <div className="font-bold">Capstone Presentation</div>
                  </div>
                </div>
              </td>
              <td>Corporate</td>
              <td>USTP Gymnasium</td>
              <td>2025-06-24</td>
              <td>09:00</td>
              <td>12:00</td>
              <th>
                <button
                  className="btn btn-ghost btn-xs p-2"
                  onClick={handleEditModal}
                >
                  <Pencil className="h-4 w-4" />
                </button>
              </th>
            </tr>
          </tbody>
          </table>
        </div>
        <div className="join self-end">
          <button className="join-item btn btn-soft btn-neutral">«</button>
          <button className="join-item btn btn-soft btn-neutral">Page 1</button>
          <button className="join-item btn btn-soft btn-neutral">»</button>
        </div>
      </div>
      <AddEventModal />
      <EditEventModal />
    </div>
  );
}
