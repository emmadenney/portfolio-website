import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GrMenu } from "react-icons/Gr";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineClose,
} from "react-icons/ai";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  const openNav = () => {
    setShowNav(true);
  };

  const closeNav = () => {
    setShowNav(false);
  };

  return (
    <main className="fixed w-full h-20 shadow-xl z-[100]">
      <section className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Image
          src="/../public/web-developer.png"
          alt="logo"
          width="50"
          height="10"
        />
        <ul className="hidden md:flex">
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
          </Link>
          <Link href="/">
            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
          </Link>
        </ul>
        <GrMenu
          className="md:hidden cursor-pointer"
          size="25"
          onClick={openNav}
        />
      </section>
      {showNav ? (
        <section className="fixed left-0 top-0 w-full h-screen bg-black/70">
          <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10">
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/web-developer.png"
                alt="logo"
                width="40"
                height="5"
              />
              <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose onClick={closeNav} />
              </div>
            </div>
            <nav className="py-4 flex flex-col">
              <ul>
                <Link href="/">
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">About</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Skills</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Projects</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Contact</li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="text-gray-600 tracking-widest text-center">
                  Connect with me
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%] text-black">
                  <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer">
                    <Link
                      href="https://www.linkedin.com/in/emma-denney-17ab5b46/"
                      target="_blank"
                    >
                      <AiFillLinkedin />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer">
                    <Link href="https://github.com/emmadenney" target="_blank">
                      <AiOutlineGithub />
                    </Link>
                  </div>
                  <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer">
                    <Link href="mailto:emma.denney1@gmail.com" target="_blank">
                      <AiOutlineMail />
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </section>
      ) : null}
    </main>
  );
}
