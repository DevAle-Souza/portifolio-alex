'use client'

import { MeteorsContainer } from "@/components/AboutCard";
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

export default function Home() {
  return (
    <main>
      <div className="h-[100vh] overflow-hidden bg-black">
      <VortexWithStars>
        <div className="flex h-full text-xl text-slate-200 items-center justify-center text-center max-w-[55%] m-auto">
          <p>Congratulations, you've made it to my portfolio! 🚀</p>
        </div>

        <div className="flex h-full items-center justify-center text-center max-w-[55%] m-auto">
          <TextGenerateEffect
            duration={3}
            filter={false}
            words={words}
          />
        </div>

        <div className="flex h-full text-xl text-white items-center justify-center text-center max-w-[65%] m-auto font-medium">
          <h4>Hi! I’m Carlos Alexandre, a Front-End Developer focused on building modern, responsive, and high-performance web applications.</h4>
        </div>

        <div className="mt-5 flex h-full text-xl text-white items-center justify-center text-center max-w-[65%] m-auto font-medium">
          <button className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <Download className="h-5 w-5"/>
              <p>BAIXAR PDF CV</p>
            </span>
          </button>
        </div>

        {/* <div className="absolute top-120 left-0 right-0 flex justify-center">
          <ChevronsDown
            className="w-12 h-12 text-slate-300 animate-bounce"
          />
        </div> */}
      </VortexWithStars>
    </div>
    <section className="bg-black py-3">
      <h2 className="text-white text-center text-4xl font-bold">About me</h2>
      <div className="max-w-[1000px] m-auto mt-14 gap-6 grid grid-cols-2">
      <MeteorsContainer>
      <h4 className="text-xl font-bold pb-1">From Gamer to Developer</h4>
        <p className="text-justify">“I’m a 22-year-old Front-End Developer from Goiás, Brazil. My passion for technology started in my childhood, driven by my love for games. That curiosity led me to discover how games are made — and that’s when I found programming.”</p>
      </MeteorsContainer>
      <MeteorsContainer>
        <h4 className="text-xl font-bold pb-1">Computer scientist</h4>
        <p className="text-justify">"I completed a Bachelor's degree in Computer Science at Universidade Paulista - GO. It was 4 years of learning the theory behind the entire programming universe, where I started to truly understand how things work."</p>
      </MeteorsContainer>
      <MeteorsContainer>
      <h4 className="text-xl font-bold pb-1">My approach</h4>
        <p>“My approach is simple: create beautiful, functional, and practical solutions. I combine clean design with intuitive user experiences, always focusing on performance, usability, and real impact.”</p>
      </MeteorsContainer>
      <MeteorsContainer>
        <h4 className="text-xl font-bold pb-1">Always Learning, Always Growing</h4>
        <p className="text-justify">
          “I believe that technology never stops evolving — and neither do I. I’m constantly learning, improving my skills, and exploring new tools, frameworks, and technologies to deliver better and more innovative solutions.”
        </p>
      </MeteorsContainer>
      </div>
    </section>
    </main>
  );
}
