"use client";

import { useState } from "react";

interface WorkProps {
  children?: React.ReactNode;
}

const workData = [
  {
    title: "Game of Life",
    description: "Zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.",
    liveDemo: "https://game-of-life-joaquin-galoppo.vercel.app/",
    sourceCode: "https://github.com",
  },
  {
    title: "E-Commerce",
    description: "An e-commerce app built with React, Redux, Firebase, Stripe, and GraphQL. This is a complete e-commerce app where users can create an account, sign in, add items to cart, checkout, and pay for the items.",
    liveDemo: "https://game-of-life-joaquin-galoppo.vercel.app/",
    sourceCode: "https://github.com",
  },
  {
    title: "Finance Tracker",
    description: "I created this app to learn the T3 framework. It is a finance tracker where users can create an account, add stocks to their portfolio, and see the latest news about the stocks they are following.",
    liveDemo: "https://game-of-life-joaquin-galoppo.vercel.app/",
    sourceCode: "https://github.com",
  },
];

const Work: React.FC<WorkProps> = () => {
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-stone-100 dark:bg-stone-900 py-24 lg:py-40 px-3">
      <div className="flex flex-col items-center justify-center pb-12 lg:pb-20">
        <h2 className="text-4xl font-bold text-stone-900 dark:text-stone-50 mb-4">Projects</h2>
        <p className="text-lg text-stone-500 max-w-md mx-auto text-center dark:text-stone-400">
          Some of my projects. I am always building new things, so check back often to get the latest updates.
        </p>
      </div>
      
      <div className="flex flex-col gap-8">
      <div className="flex gap-2 xl:gap-8 max-w-screen-md lg:max-w-screen-xl mx-auto justify-center">
      {workData.map((data, index) => (
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
      <div className="flex justify-center items-center gap-4">
      {
        Array.from({ length: workData.length }, (_, index) => (
          <Selector 
            key={index}
            index={index}
            selected={selected}
            setSelected={setSelected}
          />
        ))
      }
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

const Card: React.FC<Data> = ({ title, description, liveDemo, sourceCode, className}) => {
  return (
    <div className={"lg:inline-flex flex flex-col max-w-md lg:max-w-sm bg-white dark:bg-stone-800 rounded-lg border dark:border-stone-600 gap-8 lg:gap-2 xl:gap-6 p-8 justify-between" + className}>
      <h3 className="text-xl font-semibold text-stone-900 dark:text-stone-200">
        <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="inline-block mr-2 text-stone-400 dark:text-stone-400">
        <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
        </svg>
        {title}
        <p className="ml-2 inline-block align-text-bottom font-normal leading-none py-1 text-[12px] px-1.5 text-stone-700 dark:text-stone-400 border border-stone-300 dark:border-stone-500 rounded-3xl">Public</p>
      </h3>
      <p className="text-md text-justify text-stone-500 dark:text-stone-300 max-w-[450px] mx-auto lg:mx-0">
        {description}
      </p>
      <div className="flex flex-col flex-wrap sm:flex-row justify-end gap-2 mt-4">
        <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center border border-stone-900 dark:border-stone-500 bg-stone-50 dark:bg-stone-700 hover:opacity-80 text-stone-900 dark:text-stone-200 rounded-lg px-3.5 py-1.5">
        <svg width={20} height={20} className="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
          </svg>
          <span>Demo</span>
        </a>
        <a href={sourceCode} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center border border-stone-900 dark:border-stone-500 bg-stone-50 dark:bg-stone-700 hover:opacity-80 text-stone-900 dark:text-stone-200 rounded-lg px-3.5 py-1.5">
        <svg width={20} height={20} className="mr-2" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
          <span>Code</span>
        </a>
      </div>
    </div>
  );
}

interface SelectorProps {
  index: number;
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

const Selector: React.FC<SelectorProps> = ({ index, selected, setSelected }) => {
  return (
    <div
      className={
        "inline-flex lg:hidden w-3 h-3 rounded-full cursor-pointer " +
        (index === selected ? " bg-stone-500 dark:bg-stone-500" : " bg-stone-900 dark:bg-stone-50")
      }
      onClick={() => setSelected(index)}
    ></div>
  );
}

  

export default Work;
