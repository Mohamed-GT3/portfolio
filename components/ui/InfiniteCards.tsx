"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";

export const InfiniteMovingCards = ({
  items,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // التعامل مع الزر التالي
  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // التعامل مع الزر السابق
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className={cn(
          "relative z-20 w-screen overflow-hidden",
          className
        )}
      >
        <ul
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`, // تأثير الحركة بين الكروت
          }}
        >
          {items.map((item, idx) => (
            <li
              key={idx}
              className="w-screen flex-shrink-0 px-4 md:px-16"
            >
              <div className="relative rounded-2xl border border-slate-800 p-5 md:p-16 bg-slate-900">
                <blockquote>
                  <span className="text-white text-sm md:text-lg leading-[1.6] font-normal">
                    {item.quote}
                  </span>
                  <div className="mt-6 flex items-center">
                    <div className="me-3">
                      <img src="/profile.svg" alt="profile" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xl font-bold text-white">
                        {item.name}
                      </span>
                      <span className="text-sm text-white/70 font-normal">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 flex gap-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg disabled:opacity-50 transition duration-300 ease-in-out transform hover:scale-105 hover:from-blue-600 hover:to-purple-600"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === items.length - 1}
          className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-lg disabled:opacity-50 transition duration-300 ease-in-out transform hover:scale-105 hover:from-yellow-500 hover:to-yellow-700"
        >
          Next
        </button>

      </div>
    </div>
  );
};
