"use client";

import { useState } from "react";
import { FaPlay as Play, FaCode as GitHub } from "react-icons/fa";

const projects = [
  {
    title: "Game of Life",
    description:
      "Zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.",
    liveDemo: "https://game-of-life-joaquin-galoppo.vercel.app/",
    sourceCode: "https://github.com",
  },
  {
    title: "E-Commerce",
    description:
      "An e-commerce app built with React, Redux, Firebase, Stripe, and GraphQL. This is a complete e-commerce app where users can create an account, sign in, add items to cart, checkout, and pay for the items.",
    liveDemo: "https://game-of-life-joaquin-galoppo.vercel.app/",
    sourceCode: "https://github.com",
  },
  {
    title: "Finance Tracker",
    description:
      "I created this app to learn the T3 framework. It is a finance tracker where users can create an account, add stocks to their portfolio, and see the latest news about the stocks they are following.",
    liveDemo: "https://game-of-life-joaquin-galoppo.vercel.app/",
    sourceCode: "https://github.com",
  },
  {
    title: "Game of Life",
    description:
      "Zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.",
    liveDemo: "https://game-of-life-joaquin-galoppo.vercel.app/",
    sourceCode: "https://github.com",
  },
];

const Work: React.FC = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section id="work" className="bg-stone-50  py-24 lg:py-40">
      <div className="mx-auto flex max-w-screen-lg flex-col gap-12 px-3 lg:px-6">
        <div className="flex flex-col items-center justify-center">
          <div className="mx-auto flex w-full max-w-md flex-col gap-4 text-center">
            <h3 className="text-3xl font-bold tracking-tight  text-primary">What I&apos;ve been working on</h3>
            <p className="text-lg text-secondary">
              Here are some projects I&apos;ve created recently. I&apos;m always learning new tech and building things.
            </p>
          </div>
        </div>

        <div className="mx-auto flex justify-center gap-8 lg:grid lg:max-w-screen-xl lg:grid-cols-2">
          {projects.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              description={data.description}
              liveDemo={data.liveDemo}
              sourceCode={data.sourceCode}
              className={index === selected ? "" : " hidden"}
            />
          ))}
        </div>
        <div className="flex items-center justify-center gap-4">
          {Array.from({ length: projects.length }, (_, index) => (
            <Selector key={index} index={index} selected={selected} setSelected={setSelected} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface Data {
  title: string;
  description: string;
  liveDemo: string;
  sourceCode: string;
  className: string;
}

const Card: React.FC<Data> = ({ title, description, liveDemo, sourceCode, className }) => {
  return (
    <div
      className={
        "flex max-w-md flex-col justify-between gap-8 rounded-2xl  border border-secondary/20 bg-white  p-8 lg:inline-flex lg:max-w-max lg:gap-6" +
        className
      }
    >
      <h3 className="text-xl font-semibold text-primary">
        <svg
          height="16"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          className="mr-2 inline-block text-secondary"
        >
          <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
        </svg>
        {title}
        <p
          className="secondary ml-2 inline-block rounded-3xl border
border-secondary/40 px-1.5 py-1 align-text-bottom text-[12px]  font-normal leading-none text-primary"
        >
          Public
        </p>
      </h3>
      <p className="text-md mx-auto  max-w-md text-secondary lg:mx-0">{description}</p>
      <div className="mt-4 flex flex-col justify-end gap-2 sm:flex-row">
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-secondary/40 px-3.5  py-1.5 text-primary hover:opacity-80"
        >
          <Play className="h-2 w-auto" />
          <span className="font-medium text-primary">Demo</span>
        </a>
        <a
          href={sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-secondary/40 px-3.5  py-1.5 text-primary hover:opacity-80"
        >
          <GitHub className="h-3 w-auto" />
          <span className="font-medium text-primary">Code</span>
        </a>
      </div>
    </div>
  );
};

interface SelectorProps {
  index: number;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

const Selector: React.FC<SelectorProps> = ({ index, selected, setSelected }) => {
  return (
    <div
      className={
        "inline-flex h-3 w-3 cursor-pointer rounded-full lg:hidden " +
        (index === selected ? " bg-secondary" : " bg-primary")
      }
      onClick={() => setSelected(index)}
    ></div>
  );
};

export default Work;
