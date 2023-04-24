import Link from "next/link";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineClose,
} from "react-icons/ai";

export default function Main() {
  return (
    <main className="w-full h-screen text-center">
      <section className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">Emma Denney</h1>
          <br></br>
          <div className="py-2">
            <h1 className=" text-gray-700">
              Junior <span className="text-black">Full Stack</span> Software
              Developer
            </h1>
          </div>
          <p className="py-4 max-w-[70%] m-auto">
            Hello! Welcome to my website, which I built using React, Next.js and
            styled with Tailwind CSS. Here you can find out all about me, my
            technical skills in web development and all the projects I have been
            working on. Feel free to have a look around!
          </p>
          <nav className="flex items-center justify-between max-w-[330px] m-auto text-black py-4">
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
          </nav>
        </div>
      </section>
    </main>
  );
}
