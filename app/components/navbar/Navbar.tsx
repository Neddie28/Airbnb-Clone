"use client";
import React from "react";
//@ts-ignore
import Container from "../Container";
import Categories from "./Categories";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { User } from "@prisma/client";
import { SafeUser } from "@/app/types";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar = ({currentUser}: NavbarProps) => {
 
  return (
    <div className="fixed w-full z-10 bg-white shadow-md">
      <div className=" py-4 border-b-[1px]">
        <Container>
          <div className=" flex flex-row items-center justify-between  gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser}/>
          </div>
        </Container>
        <Categories />
       
      </div>
     
    </div>
  );
};

export default Navbar;
