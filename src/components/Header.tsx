/* eslint-disable @typescript-eslint/no-explicit-any */

import { User, UserCircle } from "lucide-react";

export default function Header(props: { link_left: any; link_right: any }) {
  const { link_left, link_right } = props;

  return (
    <nav className="flex flex-row justify-between border-b border-gray-200 bg-white px-8 py-6">
      <span className="text-gray-400">
        {link_left} /{" "}
        <span className="font-bold text-[#242424]">{link_right}</span>
      </span>
      <div className="flex flex-row items-center gap-4">
        <UserCircle size={32} className="cursor-pointer" />
      </div>
    </nav>
  );
}
