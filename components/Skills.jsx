import Image from "next/image";

export default function Skills() {
  return (
    <main id="skills" className="w-full lg:h-screen p-4">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2>Skills</h2>
        <section className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/logos/js.png"
                  alt="Javascript logo"
                  width="80"
                  height="80"
                />
                <p className="text-center pt-2">Javascript</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/logos/HTML.png"
                  alt="HTML logo"
                  width="88"
                  height="88"
                />
                <p className="text-center pt-2">HTML</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/logos/CSS.svg.png"
                  alt="CSS logo"
                  width="88"
                  height="88"
                />
                <p className="text-center pt-2">CSS</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/logos/React.svg.png"
                  alt="React logo"
                  width="88"
                  height="88"
                />
                <p className="text-center pt-2">React</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/logos/nextjs.png"
                  alt="Nextjs logo"
                  width="88"
                  height="88"
                />
                <p className="text-center pt-2">Next.js</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/logos/Tailwind.svg.png"
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
                <Image
                  src="/../public/logos/Sql.png"
                  alt="SQL logo"
                  width="88"
                  height="88"
                />
                <p className="text-center pt-2">SQL</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/logos/Postgresql.svg.png"
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
                <Image
                  src="/../public/logos/nodejs.png"
                  alt="Nodejs logo"
                  width="130"
                  height="130"
                />
                <p className="text-center pt-2">Node.js</p>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/logos/jest.png"
                  alt="Jest logo"
                  width="88"
                  height="88"
                />
                <p className="text-center pt-2">Jest</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
