import logo from "../../../../public/assets/images/Logo.png";
import Image from "next/image";
import { HiTemplate } from "react-icons/hi";
import { MdHistory } from "react-icons/md";
import { Link } from "@/i18n/navigation";
import { PiExam } from "react-icons/pi";
import Logout from "./components/logout";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { cn } from "@/lib/utils/tailwind-merge";

// Links
const links = [
  {
    name: "Dashboard",
    path: "/",
    icon: <HiTemplate />,
  },
  {
    name: "Exams",
    path: "/exams",
    icon: <PiExam />,
  },
  {
    name: "Quiz History",
    path: "/history",
    icon: <MdHistory />,
  },
];

export default function Sidebar() {
  //States

  return (
    <div
      className={cn(
        "pt-12 ps-8 w-52 shadow-md fixed top-0 bottom-0 shadow-hiro bg-slate-100  rounded-r-[20px]"
      )}
    >
      {/* Toggle Close */}
      <div className="absolute top-5 bg-slate-200 shadow-md rounded-r-full -right-8 flex  gap-2 items-center">
        <IoMdCloseCircleOutline className="text-3xl text-red-600" />
      </div>
      {/* Logo */}
      <Image
        src={logo}
        width={130}
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
        <Logout />
      </ul>
    </div>
  );
}
