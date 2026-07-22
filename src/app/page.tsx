"use client";

import { MeteorsContainer } from "@/components/AboutCard";
import { PinContainer } from "@/components/ui/3d-pin";
import { Button } from "@/components/ui/button";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { VortexWithStars } from "@/components/ui/VortexWithStars";
import { useLanguage } from "@/context/language-context";
import { Download, Github, Instagram, MessageCircleMore } from "lucide-react";
import Image from "next/image";
import GrupoPraxis from '../../public/grupo-praxis.png';
import ProfessorMarcio from '../../public/professor-marcio.png';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main>
      <div className="h-[100vh] overflow-hidden bg-black">
        <VortexWithStars>
          <div className="flex h-full text-sm sm:text-xl text-slate-200 items-center justify-center text-center max-w-[90%] sm:max-w-[55%] m-auto">
            <p>{t.hero.congrats}</p>
          </div>

          <div className="flex h-full items-center justify-center text-center max-w-[90%] sm:max-w-[55%] m-auto">
            <TextGenerateEffect key={t.hero.words.map((w) => w.word).join("-")} duration={3} filter={false} words={t.hero.words} />
          </div>

          <div className="flex h-full text-md sm:text-xl text-white items-center justify-center text-center max-w-[90%] sm:max-w-[65%] m-auto font-medium">
            <h4>{t.hero.subtitle}</h4>
          </div>

          <div className="mt-5 flex h-full text-lg sm:text-xl text-white items-center justify-center text-center max-w-[90%] sm:max-w-[65%] m-auto font-medium">
            <a
              href="/cv/carlos-alexandre-cv.pdf"
              download="carlos-alexandre-cv.pdf"
              className="relative inline-flex h-10 sm:h-12 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex gap-2 h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-sm sm:text-base font-medium text-white backdrop-blur-3xl">
                <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                <p>{t.hero.downloadCv}</p>
              </span>
            </a>
          </div>
        </VortexWithStars>
      </div>
      <section className="bg-black py-3">
        <h2 className="text-white text-center text-2xl sm:text-4xl font-bold">{t.about.heading}</h2>
        <div className="max-w-[1000px] m-auto mt-8 sm:mt-14 gap-6 grid grid-cols-1 sm:grid-cols-2 p-2">
          {t.about.cards.map((card) => (
            <MeteorsContainer key={card.title}>
              <h4 className="text-lg sm:text-xl font-bold pb-1">{card.title}</h4>
              <p className="text-sm sm:text-base text-justify">"{card.text}"</p>
            </MeteorsContainer>
          ))}
        </div>
      </section>
      <section className="bg-black pt-12 sm:pt-24">
        <h2 className="text-white text-center text-2xl sm:text-4xl font-bold">{t.skills.heading}</h2>
        <div className="h-[20rem] rounded-md flex flex-col antialiased bg-black bg-grid-white/[0.05] items-center pt-5 relative overflow-hidden">
          <InfiniteMovingCards disableAutoScrollOnMobile={true} items={t.skills.testimonials} direction="right" speed="slow" />
        </div>
      </section>

      <section className="bg-black py-12">
        <h2 className="text-white text-center text-2xl sm:text-4xl font-bold">{t.projects.heading}</h2>
        <div className="h-auto w-full flex flex-col sm:flex-row items-center justify-center gap-20 sm:gap-10 py-10 sm:py-24 px-4 sm:px-0">
          <PinContainer
            title="/www.praxisuft.com.br"
            href="https://www.praxisuft.com.br/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] sm:w-[23rem] h-auto sm:h-[25rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-sm sm:text-base text-slate-100">
                {t.projects.praxis.title}
              </h3>
              <div className="text-sm sm:text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">
                  {t.projects.praxis.description}
                </span>
              </div>
              <Image className="flex flex-1 w-full rounded-lg mt-4" alt="Grupo Praxis" src={GrupoPraxis} width={340} height={340} />
            </div>
          </PinContainer>

          <PinContainer
            title="/marciocarvalhoprofessor.com"
            href="https://marciocarvalhoprofessor.com/"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] sm:w-[23rem] h-auto sm:h-[25rem]">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-sm sm:text-base text-slate-100">
                {t.projects.marcio.title}
              </h3>
              <div className="text-sm sm:text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500">
                  {t.projects.marcio.description}
                </span>
              </div>
              <Image className="flex flex-1 w-full rounded-lg mt-4" alt="Professor Marcio" src={ProfessorMarcio} width={340} height={340} />
            </div>
          </PinContainer>
        </div>
      </section>
      <footer className="bg-[#323a56]">
        <div className="flex flex-col sm:flex-row m-auto h-auto sm:h-14 text-white font-bold text-sm sm:text-md items-center justify-around text-center py-4 sm:py-0">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center justify-center gap-4 mt-4 sm:mt-0">
            <a href="https://github.com/DevAle-Souza" target="_blank">
              <Button className="p-3 cursor-pointer flex items-center justify-center"><Github className="h-4 w-4" /></Button>
            </a>
            <a href="https://www.instagram.com/ale11br/" target="_blank">
              <Button className="p-3 cursor-pointer flex items-center justify-center"><Instagram className="h-4 w-4" /></Button>
            </a>
            <a href="https://wa.me/62999267011" target="_blank">
              <Button className="p-3 cursor-pointer flex items-center justify-center"><MessageCircleMore className="h-4 w-4" /></Button>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
