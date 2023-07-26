"use client";

import { useState } from "react";
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import scrollTo from "../utils/scrollTo";
import * as Dialog from "@radix-ui/react-dialog";

const links = [
  {
    text: "about",
    onClick: () => scrollTo("about"),
  },
  {
    text: "projects",
    onClick: () => scrollTo("work"),
  },
  {
    text: "contact",
    onClick: () => scrollTo("contact"),
  },
];

export const Nav: React.FC = () => {
  return (
    <nav className="fixed z-50 w-full border-b bg-white/95 py-5 backdrop-blur-sm lg:py-6">
      <div className="mx-auto flex w-full max-w-screen-lg items-center justify-between px-4 lg:px-6">
        <h1
          onClick={() => scrollTo("hero")}
          className="cursor-pointer font-semibold tracking-tight text-primary hover:underline underline-offset-2"
        >
          joagaloppo.com
        </h1>
        <ul className="hidden sm:flex sm:gap-4">
          {links.map((link, index) => (
            <li key={index}>
              <span
                onClick={link.onClick}
                className="cursor-pointer font-semibold tracking-tight text-primary hover:underline underline-offset-2"
              >
                {link.text}
              </span>
            </li>
          ))}
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
          <div className="mx-auto flex min-h-[100dvh] w-full flex-col overflow-y-auto bg-white px-4 py-5 lg:px-6 lg:py-6">
            <button onClick={() => setOpen(false)} className="flex w-full justify-end">
              <IoCloseSharp className="h-6 w-auto text-primary" />
            </button>
            <ul className="flex h-auto flex-grow flex-col items-center justify-center gap-8">
              {links.map((link, index) => (
                <li key={index}>
                  <span
                    onClick={() => {
                      link.onClick();
                      setOpen(false);
                    }}
                    className="cursor-pointer text-2xl font-semibold text-primary"
                  >
                    {link.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
};
