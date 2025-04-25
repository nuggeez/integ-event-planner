/* eslint-disable @typescript-eslint/no-explicit-any */

import { Home, Calendar, Users, MessageSquare, Car } from "lucide-react";
import { NavLink } from "react-router";

export default function Sidebar(props: { currentPage?: any }) {
  const { currentPage } = props;

  return (
    <aside className="sticky top-0 flex h-screen basis-[15%] flex-col bg-[#242424] px-4">
      <h1 className="my-12 text-center text-4xl text-white italic">FROLink</h1>
      <div className="px-2">
        <NavLink
          to="/event-planner"
          className="flex w-full flex-1 cursor-pointer flex-row items-center gap-4 rounded-3xl p-4 hover:bg-white/25"
        >
          <Home size={24} className="text-white" />
          <p className="text-white">Home</p>
        </NavLink>
        <details className="group">
          <summary className="flex w-full cursor-pointer list-none flex-row items-center gap-4 rounded-3xl p-4 hover:bg-white/25">
            <Calendar size={24} className="text-white" />
            <p className="text-white">My events</p>
          </summary>
          <div className="mt-4 mb-4 ml-8 flex flex-col items-start justify-start gap-6 rounded-3xl bg-white/20 px-8 py-4">
            <NavLink to="upcoming-events" className="text-white">
              Upcoming
            </NavLink>
            <NavLink to="past-events" className="text-white">
              Past
            </NavLink>
            <NavLink to="draft-events" className="text-white">
              Draft
            </NavLink>
          </div>
        </details>
        <NavLink
          to="manage-attendees"
          className="flex w-full flex-1 cursor-pointer flex-row items-center gap-4 rounded-3xl p-4 hover:bg-white/25"
        >
          <Users size={24} className="text-white" />
          <p className="text-white">Attendees</p>
        </NavLink>
        <NavLink
          to="manage-vendors"
          className="flex w-full flex-1 cursor-pointer flex-row items-center gap-4 rounded-3xl p-4 hover:bg-white/25"
        >
          <Car size={24} className="text-white" />
          <p className="text-white">Vendors</p>
        </NavLink>
        <NavLink
          to="feedbacks"
          className="flex w-full flex-1 cursor-pointer flex-row items-center gap-4 rounded-3xl p-4 hover:bg-white/25"
        >
          <MessageSquare size={24} className="text-white" />
          <p className="text-white">Feedbacks</p>
        </NavLink>
      </div>
    </aside>
  );
}
