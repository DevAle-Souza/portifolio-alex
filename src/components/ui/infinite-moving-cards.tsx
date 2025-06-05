"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  disableAutoScrollOnMobile = false,
  className,
}: {
  items: {
    quote: string;
    title: string;
    key: number;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  disableAutoScrollOnMobile?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile screen size (e.g., <640px for Tailwind's 'sm' breakpoint)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!disableAutoScrollOnMobile || !isMobile) {
      addAnimation();
    }
  }, [isMobile, disableAutoScrollOnMobile]);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl",
        // Remove mask on mobile if auto-scroll is disabled to show all items
        !disableAutoScrollOnMobile || !isMobile
          ? "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
          : "",
        // Add overflow-x-auto and snap for carousel behavior on mobile
        disableAutoScrollOnMobile && isMobile ? "overflow-x-auto snap-x snap-mandatory" : "overflow-hidden",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 pt-4",
          // Apply animation only if not on mobile or auto-scroll isn't disabled
          !disableAutoScrollOnMobile || !isMobile ? start && "animate-scroll" : "",
          // Apply pause on hover only if auto-scroll is active
          !disableAutoScrollOnMobile || !isMobile ? pauseOnHover && "hover:[animation-play-state:paused]" : "",
          // Add snap alignment for mobile carousel
          disableAutoScrollOnMobile && isMobile ? "snap-start" : ""
        )}
      >
        {items.map((item) => (
          <li
            className={cn(
              "relative w-[300px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-700 bg-[linear-gradient(180deg,#131828,#323a56)] px-6 py-4 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]",
              // Ensure items snap into place on mobile
              disableAutoScrollOnMobile && isMobile ? "snap-center" : ""
            )}
            key={item.key}
          >
            <blockquote>
              <div className="relative z-20 mb-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-lg font-bold leading-[1.6] text-white dark:text-gray-400">
                    {item.title}
                  </span>
                </span>
              </div>
              <div
                aria-hidden="true"
                className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] font-normal text-white dark:text-gray-100">
                {item.quote}
              </span>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};