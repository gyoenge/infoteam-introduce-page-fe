import slackIcon from "../imgs/workToolCard/slackIcon.svg";
import notionIcon from "../imgs/workToolCard/notionIcon.svg";
import figmaIcon from "../imgs/workToolCard/figmaIcon.svg";
import gitIcon from "../imgs/workToolCard/gitIcon.svg";
import githubIcon from "../imgs/workToolCard/githubIcon.svg";
import typescriptIcon from "../imgs/workToolCard/typescriptIcon.svg";
import reactIcon from "../imgs/workToolCard/reactIcon.svg";
import nestIcon from "../imgs/workToolCard/nestIcon.svg";
import dockerIcon from "../imgs/workToolCard/dockerIcon.svg";

export const workToolCardImgList = [
  // category - teamTool
  {
    name: "slack",
    category: "teamTool", // teamTool & devTool
    imgSrc: slackIcon,
  },
  {
    name: "notion",
    category: "teamTool",
    imgSrc: notionIcon,
  },
  {
    name: "figma",
    category: "teamTool",
    imgSrc: figmaIcon,
  },
  {
    name: "git",
    category: "teamTool",
    imgSrc: gitIcon,
  },
  {
    name: "github",
    category: "teamTool",
    imgSrc: githubIcon,
  },
  // category - devTool
  {
    name: "typescript",
    category: "devTool",
    imgSrc: typescriptIcon,
  },
  {
    name: "React",
    category: "devTool",
    imgSrc: reactIcon,
  },
  {
    name: "NestJS",
    category: "devTool",
    imgSrc: nestIcon,
  },
  {
    name: "Docker",
    category: "devTool",
    imgSrc: dockerIcon,
  },
];
