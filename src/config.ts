import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://vaayne.com/",
  author: "Vaayne",
  profile: "https://satnaing.dev/",
  desc: "Vaayne's Tea House",
  title: "Vaayne's Tea House",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/satnaing/astro-paper/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "zh", // html lang code. Set this empty and default will be "en"
  langTag: ["zh-CN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/Vaayne",
    linkTitle: `Github`,
    active: true,
  },
  {
    name: "X",
    href: "https://x.com/LiuVaayne",
    linkTitle: 'X',
    active: true,
  },
];
