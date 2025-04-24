"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React from "react";
import { CgLogOut } from "react-icons/cg";

export default function Logout() {
  return (
    <li>
      <Button
        onClick={() => {
          signOut();
        }}
        variant={"destructive"}
        className="text-xl font-bold"
      >
        <CgLogOut className="text-2xl font-bold" /> Log Out
      </Button>
    </li>
  );
}
