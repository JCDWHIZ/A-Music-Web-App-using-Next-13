import React from "react";
import Link from "next/link";
import {
  RiYoutubeFill,
  RiInstagramFill,
  RiSpotifyFill,
  RiSoundcloudFill,
} from "react-icons/ri";

const socials = [
  {
    path: "#",
    icon: <RiYoutubeFill />,
  },
  {
    path: "#",
    icon: <RiInstagramFill />,
  },
  {
    path: "#",
    icon: <RiSpotifyFill />,
  },
  {
    path: "#",
    icon: <RiSoundcloudFill />,
  },
];

function Social({ containerStyles, iconStyles }) {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((items, index) => {
        return (
          <Link href={items.path} key={index}>
            <div className={`${iconStyles}`}>{items.icon}</div>
          </Link>
        );
      })}
    </div>
  );
}
export default Social;
