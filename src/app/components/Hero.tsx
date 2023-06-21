import Image from "next/image";
import { FaLinkedin as LinkedIn, FaGithub as GitHub, FaExternalLinkAlt as Link } from "react-icons/fa";
import { AiFillMail as Email } from "react-icons/ai";

const links = [
  {
    link: "mailto:joaquingaloppo@gmail.com",
    icon: <Email className="h-6 w-auto text-primary" />,
  },
  {
    link: "https://linkedin.com/in/joagaloppo",
    icon: <LinkedIn className="h-6 w-auto text-primary" />,
  },
  {
    link: "https://github.com/joagaloppo",
    icon: <GitHub className="h-6 w-auto text-primary" />,
  },
];

const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-stone-50 ">
      <div className="h-16" />
      <div className="mx-auto flex max-w-screen-lg flex-col-reverse items-center justify-center gap-8 px-4 pb-20 pt-10 lg:min-h-[calc(calc(100svh_-_74px))] lg:flex-row lg:px-6 lg:pt-0">
        <div className="flex w-full flex-col items-center gap-8 lg:items-start lg:gap-12">
          <span className="flex-grow text-center text-2xl font-extrabold leading-8 tracking-tight text-primary lg:text-left lg:text-5xl lg:leading-[58px]">
            Full-stack TypeScript <br />
            Developer
            <Image
              className="relative bottom-1 ml-2 inline-flex h-6 w-auto tracking-tight lg:bottom-1.5 lg:ml-4 lg:h-10"
              src="/hand.png"
              alt="Hero"
              width={44}
              height={44}
            />
          </span>

          <span className="text-md max-w-md text-center font-normal text-secondary lg:max-w-lg lg:text-left lg:text-xl ">
            I&apos;m Joaquin, a developer specializing in TypeScript. Passionate about creating elegant, accessible, and
            high-performance web applications
          </span>

          <ul className="flex flex-wrap items-center justify-center gap-4 gap-y-8 lg:justify-start">
            <li className="cursor-pointer hover:opacity-75">
              <div className="flex items-center gap-2 rounded-full bg-primary px-4 py-[5px] text-stone-50">
                <a className="text-xs tracking-tight" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
                <Link className="h-2.5 w-auto" />
              </div>
            </li>
            {links.map((link, index) => (
              <Item key={index} {...link} />
            ))}
          </ul>
        </div>

        <div className="w-fit">
          <div className="aspect-square h-auto w-64 animate-morph bg-[url('/profile.jpg')] bg-cover bg-center bg-no-repeat transition lg:w-96" />
        </div>
      </div>
    </section>
  );
};

const Item: React.FC<{
  icon: React.ReactNode;
  link: string;
}> = ({ icon, link }) => {
  return (
    <li className="cursor-pointer  text-primary hover:opacity-75">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </li>
  );
};

export default Hero;
