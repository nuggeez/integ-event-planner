/* eslint-disable @typescript-eslint/no-explicit-any */

import { Home, Calendar, Users, Settings, PieChart } from "lucide-react";
import { NavLink } from "react-router";

export default function Sidebar(props: { currentPage?: any }) {
  const { currentPage } = props;

  return (
    <aside className="flex basis-[15%] flex-col bg-[#242424] px-4">
      <h1 className="my-12 text-center text-4xl text-white italic">FROLink</h1>
      <div className="px-2">
        <NavLink
          to="/"
          className="flex w-full flex-1 cursor-pointer flex-row items-center gap-4 rounded-3xl p-4 hover:bg-white/25"
        >
          <Home size={24} className="text-white" />
          <p className="text-white">Home</p>
        </NavLink>
        <details className="group">
          <summary className="flex w-full cursor-pointer list-none flex-row items-center gap-4 rounded-3xl p-4 hover:bg-white/25">
            <Calendar size={24} className="text-white" />
            <p className="text-white">All events</p>
          </summary>
          <div className="mt-4 ml-8 flex flex-col items-start justify-start gap-6 rounded-3xl bg-white/20 px-8 py-4">
            <NavLink to="/published_events" className="text-white">
              Published events
            </NavLink>
            <button className="text-white hover:underline">Draft events</button>
          </div>
        </details>
        <NavLink
          to="/"
          className="flex w-full flex-1 cursor-pointer flex-row items-center gap-4 rounded-3xl p-4 hover:bg-white/25"
        >
          <Users size={24} className="text-white" />
          <p className="text-white">Manage users</p>
        </NavLink>
        <details className="group">
          <summary className="flex w-full cursor-pointer list-none flex-row items-center gap-4 rounded-3xl p-4 hover:bg-white/25">
            <Settings size={24} className="text-white" />
            <p className="text-white">Settings</p>
          </summary>
          <div className="mt-4 ml-8 flex flex-col items-start justify-start gap-6 rounded-3xl bg-white/20 px-8 py-4">
            <button className="text-white hover:underline">
              Published events
            </button>
            <button className="text-white hover:underline">Draft events</button>
          </div>
        </details>
        <details className="group">
          <summary className="flex w-full cursor-pointer list-none flex-row items-center gap-4 rounded-3xl p-4 hover:bg-white/25">
            <PieChart size={24} className="text-white" />
            <p className="text-white">Analytics</p>
          </summary>
          <div className="mt-4 ml-8 flex flex-col items-start justify-start gap-6 rounded-3xl bg-white/20 px-8 py-4">
            <button className="text-white hover:underline">Performance</button>
            <button className="text-white hover:underline">
              User Activity
            </button>
            <button className="text-white hover:underline">
              Export Reports
            </button>
          </div>
        </details>
      </div>
    </aside>
  );
}
