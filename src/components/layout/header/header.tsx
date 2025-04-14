import { Input } from "@/components/ui/input";
import { IoMdSearch } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className=" flex items-center gap-5 justify-between mb-10">
      {/* Search */}
      <div className="relative w-fit flex-1">
        <IoMdSearch className="text-hiro size-5 absolute left-2  top-1/2 -translate-y-1/2" />
        <Input
          className="ps-8 h-14 text-xl shadow-primary-shadow"
          type="search"
          placeholder="Search Quiz"
        />
      </div>

      {/* Start Quiz */}
      <Button className="bg-hiro rounded-2xl">Start Quiz</Button>

      {/* Avatar */}
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </header>
  );
}
