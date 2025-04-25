import DashboardCard from "../components/DashboardCard";

import { Calendar, PieChart, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";
import Header from "../components/Header";

export default function Home() {
  const [date, setDate] = useState("January 2025");

  return (
    <div className="flex basis-[85%] flex-col gap-12 bg-gray-100">
      <Header link_left={"Home"} link_right={"Dashboard"} />
      <div className="flex flex-col gap-8 px-8">
        <div className="flex flex-col gap-2">
          <h1>Statistics</h1>
          <select
            value={"January 2025"}
            className="select select-ghost text-gray-400"
          >
            <option>January 2025</option>
            <option>February 2025</option>
            <option>March 2025</option>
            <option>April 2025</option>
            <option>May 2025</option>
          </select>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <DashboardCard
            icon={<TrendingUp />}
            title={"Total events"}
            description={42}
            subtitle={"+11.02%"}
          />
          <DashboardCard
            icon={<TrendingUp />}
            title={"Upcoming events"}
            description={42}
            subtitle={"+11.02%"}
          />
          <DashboardCard
            icon={<TrendingUp />}
            title={"Recent registrations"}
            description={42}
            subtitle={"+11.02%"}
          />
          <div className="flex flex-col gap-2 rounded-3xl bg-white p-8">
            <h1 className="text-xl font-bold">Recent activity</h1>
            <ul className="list-disc px-8">
              <li className="text-gray-400">A new user has registered</li>
              <li className="text-gray-400">A new user has registered</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Quick actions</h1>
          <div className="grid grid-cols-3 gap-4">
            <NavLink
              to="/"
              className="flex items-center gap-6 rounded-3xl bg-white p-8"
            >
              <Calendar size={64} />
              <h1 className="text-xl font-bold">Create new event</h1>
            </NavLink>
            <NavLink
              to="/"
              className="flex items-center gap-6 rounded-3xl bg-white p-8"
            >
              <Users size={64} />
              <h1 className="text-xl font-bold">Manage users</h1>
            </NavLink>
            <NavLink
              to="/"
              className="flex items-center gap-6 rounded-3xl bg-white p-8"
            >
              <PieChart size={64} />
              <h1 className="text-xl font-bold">View analytics</h1>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
