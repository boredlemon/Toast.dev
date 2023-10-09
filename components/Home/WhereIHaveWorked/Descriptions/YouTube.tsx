import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function YouTube() {
  const tasks = [
    {
      text: "I create a lot of funny meme content on YouTube",
      keywords: ["YouTube"],
    },
    {
      text: "I have more than 500 Subscribers on YouTube with about 170k views in total!",
      keywords: ["Subscribers", "Views"],
    },
    {
      text: "I started blowing up on YouTube since September 2022 starting at 58 subs to 320 subs! I got a ton of views, watch time, subscribers, etc.",
      keywords: ["Subscribers", "Views"],
    },
    {
      text: "One of the founders of YouTube (Jawed) commented on one of my videos which was this one: https://www.youtube.com/watch?v=opwWUaUadH0",
      keywords: ["Subscribers", "Views", "Jawed"],
    },
    {
      text: "The insanely high growth of my channel brought my analytics to 999% more but started to go down when my channel started to get less and less views and subscribers etc which was pretty sad :(",
      keywords: ["Subscribers", "Views", "Jawed"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Content Creator/YouTuber <span className="text-AAsecondary">@ YouTube</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Dec 2022 - Jun 2023</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.youtube.com/channel/UCGb0e9ewlGy6wCKFD6KZ2Eg", "_blank")}
          >
            https://www.youtube.com/channel/UCGb0e9ewlGy6wCKFD6KZ2Eg
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
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
