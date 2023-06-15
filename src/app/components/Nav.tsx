"use client";

import { useState } from "react";

interface NavProps {
  children?: React.ReactNode;
}

export const Nav: React.FC<NavProps> = () => {
  return (
    <nav className="bg-white border border-b fixed w-full p-6 backdrop-blur-sm bg-white/95 dark:bg-stone-800/95 dark:border-stone-900/95 z-50">
      <div className="flex items-center justify-between max-w-screen-2xl mx-auto w-full">
        <h1 className="font-semibold pointer-events-none">joagaloppo.com</h1>
        <ul className="hidden sm:inline">
          <li className="inline-block mx-2 font-semibold">
            <a className="hover:underline" href="#about">about</a>
          </li>
          <li className="inline-block mx-2 font-semibold">
            <a className="hover:underline" href="#projects">projects</a>
          </li>
          <li className="inline-block mx-2 font-semibold">
            <a className="hover:underline" href="#contact">contact</a>
          </li>
        </ul>
        <Drawer />
      </div>
    </nav>
  );
};

import * as Dialog from "@radix-ui/react-dialog";

const Drawer: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setOpen((x) => !x);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className="sm:hidden">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      <Dialog.Root open={open} onOpenChange={handleOpenChange}>
        <Dialog.Content className="fixed w-full h-fit inset-0 flex justify-end z-50 visible sm:invisible" aria-label="Drawer">
          <div className="min-h-[100svh] w-full flex flex-col mx-auto bg-white p-6 overflow-y-auto dark:bg-stone-800">
            <button onClick={closeDrawer} className="flex w-full justify-end">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <ul className="h-auto flex flex-grow flex-col items-center justify-center gap-4">
              <li className="mb-4">
                <a href="#about" className="text-2xl font-semibold" onClick={closeDrawer}>
                  about
                </a>
              </li>
              <li className="mb-4">
                <a href="#projects" className="text-2xl font-semibold" onClick={closeDrawer}>
                  projects
                </a>
              </li>
              <li className="mb-4">
                <a href="#contact" className="text-2xl font-semibold" onClick={closeDrawer}>
                  contact
                </a>
              </li>
            </ul>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};
