"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

interface StarProps {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number | null;
}

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface VortexWithStarsProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  // Vortex props
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
  // StarsBackground props
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
  // ShootingStars props
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
}

export const VortexWithStars: React.FC<VortexWithStarsProps> = ({
  children,
  className,
  containerClassName,
  // Vortex props
  particleCount = 200, // Reduced from 400 to 200
  rangeY = 100,
  baseHue = 220,
  baseSpeed = 0.0,
  rangeSpeed = 1.0, // Slightly reduced from 1.2
  baseRadius = 1,
  rangeRadius = 1.5, // Reduced from 2
  backgroundColor = "#000000", // eslint-disable-line
  // StarsBackground props
  starDensity = 0.00005, // Reduced from 0.00010
  allStarsTwinkle = true,
  twinkleProbability = 0.5,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 1,
  // ShootingStars props
  minSpeed = 8,
  maxSpeed = 12, // Reduced from 15
  minDelay = 2000, // Increased from 1200
  maxDelay = 6000, // Increased from 4200
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 8, // Reduced from 10
  starHeight = 1,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsCanvasRef = useRef<HTMLCanvasElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<StarProps[]>([]);
  const [shootingStar, setShootingStar] = useState<ShootingStar | null>(null);

  // Vortex variables
  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  const baseTTL = 50;
  const rangeTTL = 150;
  const rangeHue = 100;
  const noiseSteps = 3;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;
  let tick = 0;
  const noise3D = createNoise3D();
  let particleProps = new Float32Array(particlePropsLength);
  const center: [number, number] = [0, 0];

  const TAU: number = 2 * Math.PI;
  const rand = (n: number): number => n * Math.random();
  const randRange = (n: number): number => n - rand(2 * n);
  const fadeInOut = (t: number, m: number): number => {
    const hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };
  const lerp = (n1: number, n2: number, speed: number): number =>
    (1 - speed) * n1 + speed * n2;

  // StarsBackground logic
  const generateStars = useCallback(
    (width: number, height: number): StarProps[] => {
      const area = width * height;
      const numStars = Math.floor(area * starDensity);
      return Array.from({ length: numStars }, () => {
        const shouldTwinkle =
          allStarsTwinkle || Math.random() < twinkleProbability;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 0.05 + 0.5,
          opacity: Math.random() * 0.5 + 0.5,
          twinkleSpeed: shouldTwinkle
            ? minTwinkleSpeed +
              Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
            : null,
        };
      });
    },
    [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed]
  );

  // ShootingStars logic
  const getRandomStartPoint = () => {
    const side = Math.floor(Math.random() * 4);
    const offset = Math.random() * window.innerWidth;

    switch (side) {
      case 0:
        return { x: offset, y: 0, angle: 45 };
      case 1:
        return { x: window.innerWidth, y: offset, angle: 135 };
      case 2:
        return { x: offset, y: window.innerHeight, angle: 225 };
      case 3:
        return { x: 0, y: offset, angle: 315 };
      default:
        return { x: 0, y: 0, angle: 45 };
    }
  };

  // Vortex setup
  const setupVortex = () => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (canvas && container) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        resizeVortex(canvas);
        initParticles();
        drawVortex(canvas, ctx);
      }
    }
  };

  const initParticles = () => {
    tick = 0;
    particleProps = new Float32Array(particlePropsLength);
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  };

  const initParticle = (i: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const x = rand(canvas.width);
    const y = center[1] + randRange(rangeY);
    const vx = 0;
    const vy = 0;
    const life = 0;
    const ttl = baseTTL + rand(rangeTTL);
    const speed = baseSpeed + rand(rangeSpeed);
    const radius = baseRadius + rand(rangeRadius);
    const hue = baseHue + rand(rangeHue);

    particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
  };

  const drawVortex = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    tick++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawParticles(ctx);
    renderGlow(canvas, ctx);
    renderToScreen(canvas, ctx);
    window.requestAnimationFrame(() => drawVortex(canvas, ctx));
  };

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i, ctx);
    }
  };

  const updateParticle = (i: number, ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const i2 = 1 + i,
      i3 = 2 + i,
      i4 = 3 + i,
      i5 = 4 + i,
      i6 = 5 + i,
      i7 = 6 + i,
      i8 = 7 + i,
      i9 = 8 + i;
    const x = particleProps[i];
    const y = particleProps[i2];
    const n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU;
    const vx = lerp(particleProps[i3], Math.cos(n), 0.5);
    const vy = lerp(particleProps[i4], Math.sin(n), 0.5);
    let life = particleProps[i5];
    const ttl = particleProps[i6];
    const speed = particleProps[i7];
    const radius = particleProps[i8];
    const hue = particleProps[i9];
    const x2 = x + vx * speed;
    const y2 = y + vy * speed;

    drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);

    life++;

    particleProps[i] = x2;
    particleProps[i2] = y2;
    particleProps[i3] = vx;
    particleProps[i4] = vy;
    particleProps[i5] = life;

    (checkBounds(x, y, canvas) || life > ttl) && initParticle(i); // eslint-disable-line
  };

  const drawParticle = (
    x: number,
    y: number,
    x2: number,
    y2: number,
    life: number,
    ttl: number,
    radius: number,
    hue: number,
    ctx: CanvasRenderingContext2D
  ) => {
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineWidth = radius;
    ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  };

  const checkBounds = (x: number, y: number, canvas: HTMLCanvasElement) => {
    return x > canvas.width || x < 0 || y > canvas.height || y < 0;
  };

  const resizeVortex = (
    canvas: HTMLCanvasElement,
    // ctx?: CanvasRenderingContext2D
  ) => {
    const { innerWidth, innerHeight } = window;
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    center[0] = 0.5 * canvas.width;
    center[1] = 0.5 * canvas.height;
  };

  const renderGlow = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  ) => {
    ctx.save();
    ctx.filter = "blur(6px) brightness(150%)"; // Reduced blur and brightness
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  const renderToScreen = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  ) => {
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  // StarsBackground rendering
  const setupStars = () => {
    if (starsCanvasRef.current) {
      const canvas = starsCanvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      setStars(generateStars(width, height));
    }
  };

  useEffect(() => {
    setupStars();
    const resizeObserver = new ResizeObserver(setupStars);
    if (starsCanvasRef.current) {
      resizeObserver.observe(starsCanvasRef.current);
    }
    return () => {
      if (starsCanvasRef.current) {
        resizeObserver.unobserve(starsCanvasRef.current);
      }
    };
  }, [generateStars]);

  useEffect(() => {
    const canvas = starsCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const renderStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        if (star.twinkleSpeed !== null) {
          star.opacity =
            0.5 +
            Math.abs(Math.sin((Date.now() * 0.001) / star.twinkleSpeed) * 0.5);
        }
      });

      animationFrameId = requestAnimationFrame(renderStars);
    };

    renderStars();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [stars]);

  // ShootingStars logic
  useEffect(() => {
    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint();
      const newStar: ShootingStar = {
        id: Date.now(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      };
      setShootingStar(newStar);

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      setTimeout(createStar, randomDelay);
    };

    createStar();

    return () => {};
  }, [minSpeed, maxSpeed, minDelay, maxDelay]);

  useEffect(() => {
    const moveStar = () => {
      if (shootingStar) {
        setShootingStar((prevStar) => {
          if (!prevStar) return null;
          const newX =
            prevStar.x +
            prevStar.speed * Math.cos((prevStar.angle * Math.PI) / 180);
          const newY =
            prevStar.y +
            prevStar.speed * Math.sin((prevStar.angle * Math.PI) / 180);
          const newDistance = prevStar.distance + prevStar.speed;
          const newScale = 1 + newDistance / 100;
          if (
            newX < -20 ||
            newX > window.innerWidth + 20 ||
            newY < -20 ||
            newY > window.innerHeight + 20
          ) {
            return null;
          }
          return {
            ...prevStar,
            x: newX,
            y: newY,
            distance: newDistance,
            scale: newScale,
          };
        });
      }
    };

    const animationFrame = requestAnimationFrame(moveStar);
    return () => cancelAnimationFrame(animationFrame);
  }, [shootingStar]);

  // Vortex effect setup
  useEffect(() => {
    setupVortex();
    window.addEventListener("resize", () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (canvas && ctx) {
        resizeVortex(canvas);
      }
    });
  }, []);

  return (
    <div className={cn("relative h-full w-full pt-72", containerClassName)}>
      <canvas
        ref={starsCanvasRef}
        className={cn("h-full w-full absolute inset-0 z-0")}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className="absolute h-full w-full inset-0 z-10 bg-transparent"
      >
        <canvas ref={canvasRef} className="h-full w-full" />
      </motion.div>
      <svg ref={svgRef} className={cn("w-full h-full absolute inset-0 z-20")}>
        {shootingStar && (
          <rect
            key={shootingStar.id}
            x={shootingStar.x}
            y={shootingStar.y}
            width={starWidth * shootingStar.scale}
            height={starHeight}
            fill="url(#gradient)"
            transform={`rotate(${shootingStar.angle}, ${
              shootingStar.x + (starWidth * shootingStar.scale) / 2
            }, ${shootingStar.y + starHeight / 2})`}
          />
        )}
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
            <stop
              offset="100%"
              style={{ stopColor: starColor, stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
      <div className={cn("relative z-30", className)}>{children}</div>
    </div>
  );
};