"use client";

import { useState } from "react";
import { FaPlay as Play, FaCode as GitHub } from "react-icons/fa";
import { BsBookmarkFill as Bookmark } from "react-icons/bs";

const projects = [
  {
    title: "Finance Tracker",
    chip: "Public",
    description:
      `Dynamic web app allowing authenticated users keep a record of their expenses and incomes and see their balance. Created using the T3 stack, in order to learn and practice new technologies. Deployed on Vercel.`,
    liveDemo: "https://ft.joagaloppo.com/",
    sourceCode: "https://github.com/joagaloppo/finance-tracker",
  },
  {
    title: "Thumbnail Generator",
    chip: "Public",
    description:
      `Image processing web service that allow authenticated users upload images and create various sized thumbnails. Built on top of a serverless architecture using AWS Lambda, API Gateway, S3 and DynamoDB.`,
    liveDemo: "https://tg.joagaloppo.com/",
    sourceCode: "https://github.com/joagaloppo/thumbnail-generator",
  },
  {
    title: "Portfolio",
    chip: "Public",
    description:
      `Personal portfolio website that showcases my skills, projects, and contact information. Made with Next 13.4 app router. Deployed on Vercel.`,
    liveDemo: "https://joagaloppo.com/",
    sourceCode: "https://github.com/joagaloppo/portfolio",
  },
  {
    title: "Ecommerce",
    chip: "New",
    description:
      `Web app that allow users to browse products, add them to their cart and make orders. Built with Next.js, Express & MySQL. Currently working on it.`,
    liveDemo: "https://ec.joagaloppo.com/",
    sourceCode: "https://github.com/joagaloppo/ecommerce",
  },
];

const Work: React.FC = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section id="work" className="bg-stone-50  py-24 lg:py-40">
      <div className="mx-auto flex max-w-screen-lg flex-col gap-12 px-4 lg:px-6">
        <div className="flex flex-col items-center justify-center">
          <div className="mx-auto flex w-full max-w-md flex-col gap-4 text-center">
            <h3 className="text-2xl font-bold tracking-tight text-primary  lg:text-3xl">Some Things I&apos;ve Built</h3>
            <p className="text-md text-secondary lg:text-lg">
              Here are some projects I&apos;ve created recently. I&apos;m always learning and building
              new things.
            </p>
          </div>
        </div>

        <div className="mx-auto flex justify-center gap-8 lg:grid lg:max-w-screen-xl lg:grid-cols-2">
          {projects.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              chip={data.chip}
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
  chip: string;
  description: string;
  liveDemo: string;
  sourceCode: string;
  className: string;
}

const Card: React.FC<Data> = ({ title, chip, description, liveDemo, sourceCode, className }) => {
  return (
    <div
      className={
        "flex max-w-md flex-col justify-between gap-8 rounded-xl  border border-secondary/20 bg-white  p-8 lg:inline-flex lg:max-w-max lg:gap-6" +
        className
      }
    >
      <h3 className="text-lg font-semibold text-primary gap-2 flex items-center">
        <Bookmark className="h-3 w-auto" />
        {title}
        <p
          className="secondary inline-block rounded-3xl border
border-secondary/30 px-1.5 py-1 align-text-bottom text-[12px]  font-normal leading-none text-primary"
        >
          {chip}
        </p>
      </h3>
      <p className="text-sm mx-auto  max-w-md text-secondary lg:mx-0">{description}</p>
      <div className="mt-4 flex flex-col justify-end gap-2 sm:flex-row">
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-secondary/30 px-3.5  py-1.5 text-primary hover:bg-gray-50"
        >
          <Play className="h-2 w-auto" />
          <span className="font-medium text-primary text-sm">Demo</span>
        </a>
        <a
          href={sourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-secondary/30 px-3.5  py-1.5 text-primary hover:bg-gray-50"
        >
          <GitHub className="h-3 w-auto" />
          <span className="font-medium text-primary text-sm">Code</span>
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
