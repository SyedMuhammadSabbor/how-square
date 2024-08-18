"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo2 from "../assets/images/headerLogo.webp";
import logo from "../assets/images/headerLogo2.webp";
import { IoMenu } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { useStoreContext } from "@/context/userContext";
import { useRouter } from 'next/navigation'
const pages = [
  { link: "/", page: "Home" },
  { link: "/ourwrite", page: "Write" },
  { link: "/aboutus", page: "About Us" },
  { link: "/OurStory", page: "Our Story" },
  { link: "/contactus", page: "Contact Us" },
];

export default function Header() {
  const router = useRouter();
  const { scrolled, setScrolled } = useStoreContext();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (router.pathname === "/") {
        setScrolled(scrollY > 300);
      } else {
        setScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname, setScrolled]);

  // const handleLoginClick = () => {
  //   router.push("/login");
  // };

  return (
    <header
      className={`fixed w-full top-0 z-10 ${
        scrolled ? "bg-white text-gray-700 shadow-md" : "bg-transparent text-gray-400"
      }`}
    >
      <div className="flex justify-between items-center w-4/5 mx-auto py-2 md:w-11/12">
        <div className="">
          <Image src={scrolled ? logo : logo2} alt="logo" className="w-44 md:w-40" />
        </div>
        <ul
          className={`flex list-none transition-all ${
            open ? "block fixed top-0 right-0 w-64 h-full bg-gray-900 z-20 p-4" : "hidden md:flex md:static md:w-auto md:h-auto"
          }`}
        >
          {pages.map((value, index) => (
            <li key={index} className="md:mx-2">
              <a
                className={`block p-2 transition-all ${
                  scrolled ? "text-gray-700" : "text-white"
                } hover:text-blue-500`}
                href={value.link}
              >
                {value.page}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <button
            className="hidden md:block bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 transition-all"
            // onClick={handleLoginClick}
          >
            Sign in
          </button>
          <span
            className={`hidden md:flex items-center justify-center border-2 rounded-full px-4 py-2 ${
              scrolled ? "border-black text-black" : "border-white text-white"
            }`}
          >
            <a
              href="/signup"
              className={`transition-all ${
                scrolled ? "text-black" : "text-white"
              } hover:text-blue-500`}
            >
              Get started
            </a>
          </span>
          <button
            className={`md:hidden text-xl ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setOpen(!open)}
          >
            {open ? "X" : <IoMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
