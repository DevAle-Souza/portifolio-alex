"use client";
import { cn } from "@/lib/utils";
import { motion, stagger, useAnimate } from "motion/react";
import { useEffect } from "react";

type WordItem = {
  word: string;
  color?: string; // cor opcional para a palavra
};

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: WordItem[];
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {words.map(({ word, color }, idx) => (
          <motion.span
            key={word + idx}
            className={cn("opacity-0", color ? "" : "text-white")}
            style={{
              filter: filter ? "blur(10px)" : "none",
              color: color || undefined,
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div>
        <div className="text-6xl font-extrabold leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
