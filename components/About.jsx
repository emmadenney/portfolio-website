import Link from "next/link";
import Profile from "../public/Profile.png";
import Image from "next/image";

export default function About() {
  return (
    <main id="about" className="w-full h-screen p-4 flex items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2>About Me</h2>
          <p className="pt-4">
            Armed with ten years of experience working in audio, primarily as a
            Sound Editor, I have been building upon this foundation of technical
            skills in order to kickstart a fulfilling new career in the tech
            industry. In April 2023 I completed a software development bootcamp
            course at Northcoders in Manchester. This was an intensive 13 week
            industry-led course, during which I learnt the fundamentals of full
            stack development using Javascript. I gained the knowledge and
            skills required to build web applications using React, HTML and CSS,
            as well as mobile applications using React Native. The course taught
            me how to create and interact with non-relational databases using
            PostgreSQL and the importance of Test Driven Development (TDD) when
            designing REST APIs. This course had a particular focus on best
            practices of programming and the Agile development methodology, and
            with this I feel confident in learning and adapting quickly to new
            technologies whilst always writing clean and reusable code. I
            continue to expand my skillset with ongoing personal projects.
          </p>
          <Link href="/">
            <p className="pt-4 pb-4 underline cursor-pointer">
              Explore my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-[250px] h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4">
          <Image
            src="/../public/Profile.png"
            alt="Emma Denney"
            width="250"
            height="250"
            className="rounded-xl"
          />
        </div>
      </div>
    </main>
  );
}
