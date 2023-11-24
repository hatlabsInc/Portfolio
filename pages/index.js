import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";
import { useTheme } from "next-themes";

export default function Home() {

  const { theme } = useTheme()

  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"} overflow-hidden text-center`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10 p-5">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className={`laptop:mt-20 mt-10 w-full flex flex-col items-center justify-center text-center ${theme === "dark" ? "text-gray-400": "text-gray-500"}`}>
          <div className="mt-5 ">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-full"
            >
              {data.headerTaglineOne}&nbsp;<span className={theme === "dark" ? "text-white": "text-black"}>{data.headerTaglineTwo}.</span>
            </h1>
            <h1
              ref={textThree}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-xl tablet:text-3xl laptop:text-3xl laptopl:text-6xl p-1 tablet:p-2 text-bold w-full"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          <Socials className="mt-2 laptop:mt-5" />
        </div>
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold p-5">Work.</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols- laptop:grid-cols-3 gap-4 laptop:gap-2">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                subtitle1={project.subtitle1}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>
        <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link">
      <h1 className="mt-5 text-3xl font-medium text-sky-400">
        One Team. One Passion.
      </h1>
      <h1 className="mt-5 text-3xl font-medium text-green-400">
        Endless Possibility.
      </h1>
      <p className="text-lg title">Hatlabs: A team of creators and problem solvers, we architect, design, and develop game-changing solutions that exceed expectations. Let us help you shape the future of your business.</p>
      <br/>
      
      <div className="flex justify-content: center">
      {/* <Button href={site_url}>Visit Site</Button>
      <Button href={github_url}>Codebase</Button> */}
      </div>
      </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0 ">
          <h1 className="tablet:m-10 text-2xl text-bold">Services.</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6 text-left">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0 ">
        <h1 className="tablet:m-10 text-2xl text-bold">Hear from our happy clients..</h1>

        <Testimonials/>
        </div>
        

      <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link">
      <h1 className="mt-5 text-3xl font-medium ">
      Delivering Creative Solutions for a
      </h1>
      <h1 className="mt-5 text-3xl font-medium text-sky-400">
      Digital-First
      </h1>
      <h1 className="mt-5 text-3xl font-medium ">
      World
      </h1>
      
      <p className="text-lg title">Our mission is to deliver creative and innovative solutions that help businesses succeed in the fast-paced digital world.</p>
      <br/>
      
      <div className="flex justify-content: center">
      {/* <Button href={site_url}>Visit Site</Button>
      <Button href={github_url}>Codebase</Button> */}
      </div>
      </div>

      <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link">
      <h1 className="mt-5 text-3xl font-medium ">
        Who We 
      </h1>
      <h1 className="mt-5 text-3xl font-medium text-sky-400">
      Serve
      </h1>
      <p className="text-lg title">At Hatlabs, we have developed and deployed solutions across multiple industries and sectors. We architect, design, and develop game-changing solutions that exceed expectations. Let us help you shape the future of your business.</p>
      <br/>
      
      <div className="flex justify-content: center">
      {/* <Button href={site_url}>Visit Site</Button>
      <Button href={github_url}>Codebase</Button> */}
      </div>
      </div>
      
        {/* <div className="mt-10  p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">About.</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:pr-20 text-left">
            {data.aboutpara}
          </p>
        </div> */}
        <Footer />
      </div>
    </div>
  );
}
