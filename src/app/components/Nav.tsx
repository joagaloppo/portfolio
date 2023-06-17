"use client";

import { useState } from "react";
import scrollTo from "../utils/scrollTo";

interface NavProps {
  children?: React.ReactNode;
}

export const Nav: React.FC<NavProps> = () => {
  return (
    <nav className="/95 /95 fixed z-50 w-full border-b bg-white bg-white/95 py-6 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-screen-lg items-center justify-between px-3 lg:px-6">
        <h1 onClick={() => scrollTo("hero")} className="text-stone-800 cursor-pointer tracking-tight font-semibold hover:underline">
          joagaloppo.com
        </h1>
        <ul className="hidden sm:inline">
          <li className="mx-2 inline-block font-semibold">
            <span onClick={() => scrollTo("about")} className="cursor-pointer tracking-tight hover:underline">
              about
            </span>
          </li>
          <li className="mx-2 inline-block font-semibold">
            <span onClick={() => scrollTo("work")} className="cursor-pointer tracking-tight hover:underline">
              projects
            </span>
          </li>
          <li className="mx-2 inline-block font-semibold">
            <span onClick={() => scrollTo("contact")} className="cursor-pointer tracking-tight hover:underline">
              contact
            </span>
          </li>
        </ul>
        <Drawer />
      </div>
    </nav>
  );
};

import * as Dialog from "@radix-ui/react-dialog";

const Drawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className="sm:hidden">
        <svg className="h-6 w-6 text-stone-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      <Dialog.Root open={open} onOpenChange={() => setOpen((x) => !x)}>
        <Dialog.Content
          className="visible fixed inset-0 z-50 flex h-fit w-full justify-end sm:invisible"
          aria-label="Drawer"
        >
          <div className="mx-auto flex min-h-[100svh] w-full flex-col overflow-y-auto bg-white p-6 ">
            <button onClick={() => setOpen(false)} className="flex w-full justify-end">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <ul className="flex h-auto flex-grow flex-col items-center justify-center gap-4">
              <li className="mb-4">
                <span
                  onClick={() => {
                    scrollTo("about");
                    setOpen(false);
                  }}
                  className="text-2xl font-semibold"
                >
                  about
                </span>
              </li>
              <li className="mb-4">
                <span
                  onClick={() => {
                    scrollTo("work");
                    setOpen(false);
                  }}
                  className="text-2xl font-semibold"
                >
                  projects
                </span>
              </li>
              <li className="mb-4">
                <span
                  onClick={() => {
                    scrollTo("contact");
                    setOpen(false);
                  }}
                  className="text-2xl font-semibold"
                >
                  contact
                </span>
              </li>
            </ul>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};
