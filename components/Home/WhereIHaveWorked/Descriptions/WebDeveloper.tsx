import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function WebDeveloper() {
  const tasks = [
    {
      text: "Developed and Built modern, dynamic, responsive, HTML CSS and Next.js websites.",
      keywords: ["modern, dynamic, responsive"],
    },
    {
      text: "I am a backend, frontend, fullstack, UI/UX developer",
      keywords: ["backend, frontend, fullstack, UI/UX"],
    },
    {
      text: "I mainly code in JavaScript (my main language), HTML, CSS, and a little bit of TypeScript",
      keywords: ["JavaScript", "HTML", "CSS", "TypeScript",],
    },
    {
      text: "Worked on both frontend and backend development and using Next.js, Tailwind CSS, Node.js, Discord.js",
      keywords: ["frontend", "backend", "Next.js", "Tailwind CSS", "Node.js", "Discord.js"],
    },
    {
      text: "Coded a super advanced Economy Discord Bot with over a hundred commands ranging from ranking system to insane shopping commands to a working economy",
      keywords: ["Economy Discord Bot", "rank system", "shopping commands", "working economy"],
    },
    {
      text: "Took my creativity to the next level to create more responsible modern well designed websites",
      keywords: ["responsible modern well designed"],
    },
    {
      text: "Currently finding people to collaborate with and coming up with ideas for what I should build next!",
      keywords: ["collaborate", "build next"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Web Developer  <span className="text-AAsecondary">@ NoWhere</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">June 2023 - present</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
