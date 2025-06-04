"use client";

import { Meteors } from "./ui/meteors";

interface MeteorsContainerProps {
  children: React.ReactNode;
}

export function MeteorsContainer({ children }: MeteorsContainerProps) {
  return (
    <div className="relative w-full max-w-xl">
      <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 text-white shadow-md">
        <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-2 w-2 text-gray-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </div>
        {children}
        <Meteors number={5} /> 
      </div>
    </div>
  );
}