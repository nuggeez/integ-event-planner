import DashboardCard from "../../components/DashboardCard";
import Header from "../../components/Header";
import "cally";

import { Clock, TrendingUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router";

export default function AttendeeHomePage() {
  const [date, setDate] = useState("January 2025");

  return (
    <div className="flex flex-col gap-12 bg-gray-100">
      <Header link_left={"Home"} link_right={"Dashboard"} />
      <div className="grid grid-cols-[0.3fr_1fr] gap-8 px-8">
        <div className="sticky top-0 flex h-screen flex-col gap-4">
          <calendar-date class="cally bg-base-100 border-base-300 rounded-box w-full border shadow-lg">
            <svg
              aria-label="Previous"
              className="size-4 fill-current"
              slot="previous"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
            </svg>
            <svg
              aria-label="Next"
              className="size-4 fill-current"
              slot="next"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
            </svg>
            <calendar-month></calendar-month>
          </calendar-date>
          <div className="flex flex-col gap-4 rounded-3xl bg-white p-8">
            <div className="flex flex-row items-center gap-6">
              <Clock size={36} />
              <h1 className="text-3xl font-bold">Upcoming events</h1>
            </div>
            <p className="w-fit rounded-3xl bg-gray-100 p-8">
              Capstone Presentation - 3:00 PM
            </p>
            <p className="w-fit rounded-3xl bg-gray-100 p-8">
              Capstone Presentation - 3:00 PM
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Events</h1>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-4 rounded-3xl bg-white p-8">
              <h1>Company End-Year Party</h1>
              <div className="aspect-square h-full w-full rounded-3xl bg-gray-300" />
              <p>Venue: Boracay Beach Resort</p>
              <p>Date: June 24, 2025</p>
              <p>Time: 6:00 PM to 9:00 PM</p>
              <button className="btn btn-soft btn-primary">View details</button>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl bg-white p-8">
              <h1>Company End-Year Party</h1>
              <div className="aspect-square h-full w-full rounded-3xl bg-gray-300" />
              <p>Venue: Boracay Beach Resort</p>
              <p>Date: June 24, 2025</p>
              <p>Time: 6:00 PM to 9:00 PM</p>
              <button className="btn btn-soft btn-primary">View details</button>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl bg-white p-8">
              <h1>Company End-Year Party</h1>
              <div className="aspect-square h-full w-full rounded-3xl bg-gray-300" />
              <p>Venue: Boracay Beach Resort</p>
              <p>Date: June 24, 2025</p>
              <p>Time: 6:00 PM to 9:00 PM</p>
              <button className="btn btn-soft btn-primary">View details</button>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl bg-white p-8">
              <h1>Company End-Year Party</h1>
              <div className="aspect-square h-full w-full rounded-3xl bg-gray-300" />
              <p>Venue: Boracay Beach Resort</p>
              <p>Date: June 24, 2025</p>
              <p>Time: 6:00 PM to 9:00 PM</p>
              <button className="btn btn-soft btn-primary">View details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
