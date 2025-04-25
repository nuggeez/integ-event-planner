import Header from "../../../components/Header";
import AddEventModal from "../../../components/AddEventModal";
import EditEventModal from "../../../components/EditEventModal";

import { ArrowDownUp, Plus } from "lucide-react";
import { useState } from "react";

export default function EventPlannerDraftEventsPage() {
  const [form, setForm] = useState({});

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

  const handleEditModal = () => {};

  return (
    <div className="flex flex-col gap-12 bg-gray-100">
      <Header link_left={"Events"} link_right={"Draft events"} />
      <div className="flex flex-col gap-4 px-8">
        <div className="flex w-full items-center justify-between rounded-3xl bg-white p-4">
          <div className="flex items-center gap-4">
            <ArrowDownUp className="cursor-pointer" />
            <Plus className="cursor-pointer" onClick={handleAddModal} />
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
                <th>Owner</th>
                <th>Status</th>
                <th>Event Date</th>
                <th>Created</th>
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
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
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
