import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      <div className="p-4 text-xl font-bold">Dashboard</div>
      <ul className="mt-6">
        <li className="px-4 py-2 hover:bg-gray-700">
          <Link href="/blogs">Post Blog</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-700">
          <Link href="/skills">Post Skill</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-700">
          <Link href="/projects">Post Projects</Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-700">
          <Link href="/descriptions">Post Description</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
