import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "nublar.net",
  EMAIL: "",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "nublar.net is the personal space of Jesús Fernández.",
};

export const BLOG: Metadata = {
  TITLE: "Thoughts",
  DESCRIPTION:
    "I may write from time to time about topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos if available.",
};

export const SOCIALS: Socials = [
  // {
  //   NAME: "twitter-x",
  //   HREF: "https://twitter.com/markhorn_dev",
  // },
  {
    NAME: "github",
    HREF: "https://github.com/jesusfer",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/jesusfer",
  },
];
