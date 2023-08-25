import Image from "next/image";
import news from "../public/projects/news.png";

export default function News() {
  return (
    <main className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <Image
          className="absolute z-1"
          fill={true}
          style={{ objectFit: "cover" }}
          src={news}
          alt="news website example"
        ></Image>
      </div>
    </main>
  );
}
