import Image from "next/image";
import contact from "../public/contact.jpg";
import Link from "next/link";
import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

export default function Contact() {
  return (
    <main id="contact" className="w-full h-screen p-2">
      <div className="max-w-[1240px] m-auto px-2 w-full ">
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
          <div>
            <Image src={contact} alt="contact" className="w-full" />
          </div>
          <div className="grid items">
            <h2 className="text-center py-2 pt-2">Emma Denney</h2>
            <p className="text-center text-lg py-4">
              Junior Full Stack Developer
            </p>
            <div>
              <p className="text-center py-2">Connect with me!</p>
              <div className="flex items-center justify-evenly py-6 text-black">
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
          </div>
        </div>
        <div className="flex justify-center py-14">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
              <HiOutlineChevronDoubleUp size={20} />
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
