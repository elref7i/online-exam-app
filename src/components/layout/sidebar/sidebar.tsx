import React from "react";
import logo from "../../../../public/assets/images/Logo.png";
import Image from "next/image";
import { HiTemplate } from "react-icons/hi";
import { MdHistory } from "react-icons/md";
import { CgLogOut } from "react-icons/cg";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

// Links
const links = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <HiTemplate />,
  },
  {
    name: "Quiz History",
    path: "/history",
    icon: <MdHistory />,
  },
];

export default function Sidebar() {
  return (
    <div className="pt-10 ps-8">
      {/* Logo */}
      <Image
        src={logo}
        width={151}
        height={29}
        alt="logo-elevate"
      />

      {/* Links */}
      <ul className="space-y-8 pt-14 text-first-lead">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              className="flex gap-2 items-center text-xl font-bold"
              href={link.path}
            >
              {link.icon}
              {link.name}
            </Link>
          </li>
        ))}

        {/* Log out */}
        <li>
          <Button
            variant={"destructive"}
            className="text-xl font-bold"
          >
            <CgLogOut className="text-2xl font-bold" /> Log Out
          </Button>
        </li>
      </ul>
    </div>
  );
}
