import Image from "next/image";
import newsImg from "../public/projects/NCnews.png";
import walkingLunchImg from "../public/projects/Walkinglunch.png";
import Link from "next/link";

export default function Projects() {
  return (
    <main id="projects" className="w-full p-4">
      <div className="max-w-[1240px] mx-auto py-16 px-2"></div>
      <h2>Projects</h2>
      <section className="grid md:grid-cols-2 gap-8 mt-8 mb-12">
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#eeeded] to-[#ddd9d9]">
          <Image
            src={newsImg}
            alt="news website preview"
            className="rounded-xl group-hover:opacity-10"
          />
          <div className="hidden group-hover:block absolute left-[50%] translate-x-[-50%]">
            <h3 className="text-2xl text-gray-600 tracking-wider text-center">
              NC News Website
            </h3>
            <p className="text-center pt-2 pb-4">ReactJS</p>
            <Link href="/">
              <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                More info
              </p>
            </Link>
          </div>
        </div>
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#eeeded] to-[#ddd9d9]">
          <Image
            src={walkingLunchImg}
            alt="walking lunch preview"
            className="rounded-xl group-hover:opacity-10"
          />
          <div className="hidden group-hover:block absolute left-[50%] translate-x-[-50%] ">
            <h3 className="text-2xl text-gray-600 tracking-wider text-center">
              Walking Lunch Mobile App
            </h3>
            <p className="text-center pt-2 pb-4">React Native</p>
            <Link href="/">
              <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                More info
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
