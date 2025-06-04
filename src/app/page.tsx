"use client";

import { MeteorsContainer } from "@/components/AboutCard";
import { PinContainer } from "@/components/ui/3d-pin";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { VortexWithStars } from "@/components/ui/VortexWithStars";
import { Download } from "lucide-react";

const words = [
  { word: "Building" },
  { word: "Modern," },
  { word: "Fast," },
  { word: "and" },
  { word: "Beautiful" },
  { word: "Web", color: "#6366F1" },
  { word: "Experiences", color: "#6366F1" },
];

const testimonials = [
  {
    key: 1,
    quote:
      "I use JavaScript as my main programming language for web and mobile development. I have strong knowledge in building dynamic interfaces, handling APIs, and creating interactive user experiences.",
    title: "JavaScript",
  },
  {
    key: 2,
    quote:
      "I develop high-quality web applications using React.js. I have experience with component-based architecture, state management, hooks, and creating responsive and scalable UIs.",
    title: "React.js",
  },
  {
    key: 3,
    quote:
      "I create mobile applications using React Native, applying the same React concepts to deliver cross-platform apps with native performance for both Android and iOS.",
    title: "React Native",
  },
  {
    key: 4,
    quote:
      "I have a solid understanding of UI/UX principles. I design intuitive, user-friendly interfaces with attention to usability, accessibility, and responsive design, using tools like Figma and CSS frameworks such as Tailwind.",
    title: "UI/UX",
  },
  {
    key: 5,
    quote:
      "I use Python for automation, scripting, backend services, and data processing. It’s a versatile language that complements my frontend skills and allows me to handle backend tasks when needed.",
    title: "Python",
  },
  {
    key: 6,
    quote:
      "I work with MySQL for relational database management. I design, structure, and manage databases, ensuring data integrity and optimized queries for efficient performance.",
    title: "MySQL",
  },
  {
    key: 7,
    quote:
      "I have strong problem-solving skills, allowing me to quickly analyze challenges, find effective solutions, and adapt to new situations efficiently. This skill helps me deliver reliable and scalable solutions in every project.",
    title: "Problem-Solving",
  },
  {
    key: 8,
    quote:
      "I have excellent communication skills, which help me collaborate effectively with team members, understand client needs, share ideas clearly, and contribute to productive teamwork.",
    title: "Communication",
  },
];


export default function Home() {
  return (
    <main>
      <div className="h-[100vh] overflow-hidden bg-black">
        <VortexWithStars>
          <div className="flex h-full text-xl text-slate-200 items-center justify-center text-center max-w-[55%] m-auto">
            <p>Congratulations, you've made it to my portfolio! 🚀</p>
          </div>

          <div className="flex h-full items-center justify-center text-center max-w-[55%] m-auto">
            <TextGenerateEffect duration={3} filter={false} words={words} />
          </div>

          <div className="flex h-full text-xl text-white items-center justify-center text-center max-w-[65%] m-auto font-medium">
            <h4>
              Hi! I’m Carlos Alexandre, a Front-End Developer focused on building
              modern, responsive, and high-performance web applications.
            </h4>
          </div>

          <div className="mt-5 flex h-full text-xl text-white items-center justify-center text-center max-w-[65%] m-auto font-medium">
            <button className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                <Download className="h-5 w-5" />
                <p>DOWNLOAD PDF CV</p>
              </span>
            </button>
          </div>
        </VortexWithStars>
      </div>
      <section className="bg-black py-3">
        <h2 className="text-white text-center text-4xl font-bold">About me</h2>
        <div className="max-w-[1000px] m-auto mt-14 gap-6 grid grid-cols-2">
          <MeteorsContainer>
            <h4 className="text-xl font-bold pb-1">From Gamer to Developer</h4>
            <p className="text-justify">
              “I’m a 22-year-old Front-End Developer from Goiás, Brazil. My
              passion for technology started in my childhood, driven by my love
              for games. That curiosity led me to discover how games are made —
              and that’s when I found programming.”
            </p>
          </MeteorsContainer>
          <MeteorsContainer>
            <h4 className="text-xl font-bold pb-1">Computer scientist</h4>
            <p className="text-justify">
              "I completed a Bachelor's degree in Computer Science at
              Universidade Paulista - GO. It was 4 years of learning the theory
              behind the entire programming universe, where I started to truly
              understand how things work."
            </p>
          </MeteorsContainer>
          <MeteorsContainer>
            <h4 className="text-xl font-bold pb-1">My approach</h4>
            <p>
              “My approach is simple: create beautiful, functional, and practical
              solutions. I combine clean design with intuitive user experiences,
              always focusing on performance, usability, and real impact.”
            </p>
          </MeteorsContainer>
          <MeteorsContainer>
            <h4 className="text-xl font-bold pb-1">Always Learning, Always Growing</h4>
            <p className="text-justify">
              “I believe that technology never stops evolving — and neither do I.
              I’m constantly learning, improving my skills, and exploring new
              tools, frameworks, and technologies to deliver better and more
              innovative solutions.”
            </p>
          </MeteorsContainer>
        </div>
      </section>
      <section className="bg-black pt-24">
        <h2 className="text-white text-center text-4xl font-bold">My Skills</h2>
        <div className="h-[15rem] rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center pt-5 relative overflow-hidden">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
      </section>

      <section className="bg-black py-12">
        <h2 className="text-white text-center text-4xl font-bold">My Projects</h2>
        <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
      </section>
    </main>
  );
}