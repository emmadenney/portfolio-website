import Image from "next/image";
import js from "../public/logos/js.png";
import html from "../public/logos/HTML.png";
import css from "../public/logos/CSS.svg.png";
import react from "../public/logos/React.svg.png";
import next from "../public/logos/nextjs.png";
import tailwind from "../public/logos/Tailwind.svg.png";
import sql from "../public/logos/Sql.png";
import postgresql from "../public/logos/Postgresql.svg.png";
import node from "../public/logos/nodejs.png";
import jest from "../public/logos/jest.png";

export default function Skills() {
  return (
    <main id="skills" className="w-full h-screen my-20 p-4">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2>Skills</h2>
        <section className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={js} alt="Javascript logo" width="80" height="80" />
                <p className="text-center pt-2">Javascript</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={html} alt="HTML logo" width="88" height="88" />
                <p className="text-center pt-2">HTML</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={css} alt="CSS logo" width="88" height="88" />
                <p className="text-center pt-2">CSS</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={react} alt="React logo" width="88" height="88" />
                <p className="text-center pt-2">React</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={next} alt="Nextjs logo" width="88" height="88" />
                <p className="text-center pt-2">Next.js</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={tailwind}
                  alt="Tailwind CSS logo"
                  width="88"
                  height="88"
                />
                <p className="text-center pt-2">Tailwind CSS</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={sql} alt="SQL logo" width="88" height="88" />
                <p className="text-center pt-2">SQL</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={postgresql}
                  alt="PostgreSQL logo"
                  width="88"
                  height="88"
                />
                <p className="text-center pt-2">PostgreSQL</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={node} alt="Nodejs logo" width="130" height="130" />
                <p className="text-center pt-2">Node.js</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={jest} alt="Jest logo" width="88" height="88" />
                <p className="text-center pt-2">Jest</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
