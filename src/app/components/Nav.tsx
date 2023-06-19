"use client";

import { useState } from "react";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import scrollTo from "../utils/scrollTo";
import * as Dialog from "@radix-ui/react-dialog";

export const Nav: React.FC = () => {
  return (
    <nav className="fixed z-50 w-full border-b bg-white bg-white/95 py-5 lg:py-6 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-screen-lg items-center justify-between px-3 lg:px-6">
        <h1
          onClick={() => scrollTo("hero")}
          className="cursor-pointer font-semibold tracking-tight text-primary hover:underline"
        >
          joagaloppo.com
        </h1>
        <ul className="hidden sm:inline">
          <li className="mx-2 inline-block font-semibold text-primary">
            <span onClick={() => scrollTo("about")} className="cursor-pointer tracking-tight hover:underline">
              about
            </span>
          </li>
          <li className="mx-2 inline-block font-semibold text-primary">
            <span onClick={() => scrollTo("work")} className="cursor-pointer tracking-tight hover:underline">
              projects
            </span>
          </li>
          <li className="mx-2 inline-block font-semibold text-primary">
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

const Drawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className="sm:hidden">
        <IoMenuSharp className="h-6 w-auto text-primary" />
      </button>

      <Dialog.Root open={open} onOpenChange={() => setOpen((x) => !x)}>
        <Dialog.Content
          className="visible fixed inset-0 z-50 flex h-fit w-full justify-end sm:invisible"
          aria-label="Drawer"
        >
          <div className="mx-auto flex min-h-[100dvh] w-full flex-col overflow-y-auto bg-white px-3 py-5 lg:py-6 lg:px-6">
            <button onClick={() => setOpen(false)} className="flex w-full justify-end">
              <IoCloseSharp className="h-6 w-auto text-primary" />
            </button>
            <ul className="flex h-auto flex-grow flex-col items-center justify-center gap-4">
              <li className="mb-4">
                <span
                  onClick={() => {
                    scrollTo("about");
                    setOpen(false);
                  }}
                  className="text-2xl font-semibold text-primary"
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
                  className="text-2xl font-semibold text-primary"
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
                  className="text-2xl font-semibold text-primary"
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
