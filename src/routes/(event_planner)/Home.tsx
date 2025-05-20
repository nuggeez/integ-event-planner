import DashboardCard from "../../components/DashboardCard";
import Header from "../../components/Header";

import { TrendingUp } from "lucide-react";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", thisMonth: 120, lastMonth: 100 },
  { month: "Feb", thisMonth: 200, lastMonth: 150 },
  { month: "Mar", thisMonth: 230, lastMonth: 180 },
  { month: "Apr", thisMonth: 160, lastMonth: 190 },
  { month: "May", thisMonth: 260, lastMonth: 170 },
  { month: "Jun", thisMonth: 300, lastMonth: 210 },
  { month: "Jul", thisMonth: 280, lastMonth: 240 },
];

export default function EventPlannerHomePage() {
  const [date, setDate] = useState("January 2025");
  const [todos] = useState([
    { text: "Create a detailed event day timeline and share it with all staff.", done: true },
    { text: "Finalize vendor contracts and payment schedules before the event.", done: false },
    { text: "Have a backup plan for weather or technical issues.", done: false },
    { text: "Collect client feedback within 48 hours of the event’s conclusion.", done: false },
  ]);

  return (
    <div className="flex flex-col gap-12 bg-gray-100">
      <Header link_left={"Home"} link_right={"Dashboard"} />
      <div className="flex flex-col gap-8 px-8">
        <div className="flex flex-col gap-2">
          <h1>Statistics</h1>
          <select value={date} className="select select-ghost text-gray-400">
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
            description={21}
            subtitle={"-0.03%"}
          />
          <DashboardCard
            icon={<TrendingUp />}
            title={"Recent registrations"}
            description={241}
            subtitle={"+15.03%"}
          />
          <div className="flex flex-col gap-2 rounded-3xl bg-white p-8">
            <h1 className="text-xl font-bold">Recent activity</h1>
            <ul className="list-disc px-8 text-gray-400">
              <li>A new user has registered</li>
              <li>A new user has registered</li>
            </ul>
          </div>
        </div>

        {/* Line Chart + To-Do */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md md:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Attendee Analytics</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="thisMonth" stroke="#8884d8" />
                <Line type="monotone" dataKey="lastMonth" stroke="#000000" strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">To-Do</h2>
            <ul className="space-y-2">
              {todos.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <input type="checkbox" checked={item.done} readOnly />
                  <span className={`${item.done ? "line-through text-gray-400" : ""}`}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Upcoming + Active Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">📅 Upcoming Events</h3>
            <p className="text-sm font-medium">Capstone Presentation - May 2, 2025</p>
            <p className="text-sm text-gray-600">Seats Available: 250 / 300</p>
            <p className="text-sm text-gray-600">Registrations: 242 / 300</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">🟢 Active Events</h3>
            <p className="text-sm font-medium">Beacon Demo Day - April 9, 2025</p>
            <p className="text-sm text-gray-600">Seats Available: 250 / 300</p>
            <p className="text-sm text-gray-600">Registrations: 242 / 300</p>
          </div>
        </div>
      </div>
    </div>
  );
}
