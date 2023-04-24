import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Emma Denney | Junior Full Stack Developer</title>
      </Head>
      <Navbar />
      <Main />
      <About />
    </div>
  );
}
