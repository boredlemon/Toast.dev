import React, { useState } from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import styles from "./Footer.module.css"; // Import the CSS module

const ClickableIcon = (props) => {
  return (
    <a href={props.href} className="" target={"_blank"} rel="noreferrer">
      <props.Icon className={"w-5 h-5 text-gray-400 hover:text-AAsecondary fill-current"} />
    </a>
  );
};

const IconsData = [
  { href: "https://github.com/Vipergigabyte", Icon: GithubIcon },
  { href: "https://www.youtube.com/channel/UCGb0e9ewlGy6wCKFD6KZ2Eg", Icon: YoutubeIcon },
];

export default function Footer(props: { githubUrl: string; hideSocialsInDesktop: boolean }) {
  const [hovered, setHovered] = useState(false); // State to track hover

  return (
    <div className={`bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4 ${hovered ? styles.colorChange : ""}`}>
      {/* // ? Reach me at */}
      <div className={`flex flex-row space-x-8 ${props.hideSocialsInDesktop ? "lg:hidden" : ""}`}>
        {IconsData.map((iconData, index) => {
          return <ClickableIcon key={index} href={iconData.href} Icon={iconData.Icon} />;
        })}
      </div>
      <a href={props.githubUrl} className="" target={"_blank"} rel="noreferrer">
        <div
          className={`group flex flex-col font-mono justify-center items-center  text-gray-400 
    text-sm  space-y-2 ${hovered ? styles.colorChange : ""}`}
          onMouseEnter={() => setHovered(true)} // Set hovered to true on mouse enter
          onMouseLeave={() => setHovered(false)} // Set hovered to false on mouse leave
        >
          <span className={`sm:text-sm text-xs ${hovered ? styles.colorChange : ""}text-blue-400`}>
            Made by Viper🐍 (Dolphin#6086)
          </span>

          <span className={`text-xs flex flex-row items-center space-x-2 ${hovered ? styles.colorChange : ""}`}>
            <GithubIcon className={`w-4 h-4 text-gray-400 fill-current ${hovered ? styles.colorChange : ""}`} />
            <span className="">My Github Page</span>
          </span>

          <a href="/humans.txt">
  <span>humans.txt</span>
</a>

        </div>
      </a>
    </div>
  );
}
