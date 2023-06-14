"use client";

import { useState } from "react";

interface NavProps {
  children?: React.ReactNode;
}

export const Nav: React.FC<NavProps> = () => {
  return (
    <nav className="bg-white fixed w-full p-6 shadow-sm backdrop-blur-sm bg-white/90 dark:bg-slate-900/90">
      <div className="flex items-center justify-between max-w-screen-lg mx-auto w-full">
        <h1 className="font-semibold tracking-tight">@joagaloppo</h1>
        <ul className="hidden sm:inline">
          <li className="inline-block mx-2 hover:underline">
            <a href="#about">About</a>
          </li>
          <li className="inline-block mx-2 hover:underline">
            <a href="#projects">Projects</a>
          </li>
          <li className="inline-block mx-2 hover:underline">
            <a href="#contact">Contact</a>
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
          <div className="min-h-[100dvh] w-full flex flex-col mx-auto bg-white p-6 overflow-y-auto dark:bg-slate-900">
            <button onClick={closeDrawer} className="flex w-full justify-end">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <ul className="h-auto flex flex-grow flex-col items-center justify-center gap-4">
              <li className="mb-4">
                <a href="#about" className="text-2xl font-medium" onClick={closeDrawer}>
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#projects" className="text-2xl font-medium" onClick={closeDrawer}>
                  Projects
                </a>
              </li>
              <li className="mb-4">
                <a href="#contact" className="text-2xl font-medium" onClick={closeDrawer}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};
