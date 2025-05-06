/* eslint-disable @typescript-eslint/no-explicit-any */

import { User, UserCircle } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import usePocketBase from "../hooks/usePocketBase";

export default function Header(props: { link_left: any; link_right: any }) {
  const { link_left, link_right } = props;
  const { logout } = usePocketBase();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <nav className="flex flex-row justify-between border-b border-gray-200 bg-white px-8 py-6">
      <span className="text-gray-400">
        {link_left} /{" "}
        <span className="font-bold text-[#242424]">{link_right}</span>
      </span>
      <details className="dropdown dropdown-left">
        <summary className="list-none">
          <UserCircle size={32} className="cursor-pointer" />
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-fit p-4 shadow-sm">
          <li>
            <NavLink to="profile">Profile</NavLink>
          </li>
          <div className="divider divider-horizontal my-2" />
          <li>
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </details>
    </nav>
  );
}
