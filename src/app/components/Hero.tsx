import Image from "next/image";
import { FaLinkedin as LinkedIn, FaGithub as GitHub, FaEnvelope as Email } from "react-icons/fa";
import { FiArrowUpRight as Link } from "react-icons/fi";

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
              src="/hand.webp"
              alt="Hero"
              width={44}
              height={44}
            />
          </span>

          <span className="text-md max-w-md text-center font-normal text-secondary lg:max-w-lg lg:text-left lg:text-xl ">
          I&apos;m Joaquin, a tech lover turned developer. Looking to create world-class experiences on the web while learning and growing along the way.
          </span>

          <ul className="flex flex-wrap items-center gap-4 gap-y-8 lg:justify-start">
            <li className="cursor-pointer hover:opacity-75">
              <div className="flex w-fit gap-0.5 items-center rounded-lg bg-primary px-4 py-[5px] text-stone-50 lg:mx-0">
                <a className="align-baseline text-[10px] font-semibold tracking-tight lg:text-xs" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  CV
                </a>
                <Link className="h-4 w-auto" />
              </div>
            </li>
            {links.map((link, index) => (
              <Item key={index} {...link} />
            ))}
          </ul>
        </div>

        <div className="w-fit">
          <div className="aspect-square h-auto w-64 animate-morph bg-gray-200 bg-[url('/profile.webp')] bg-cover bg-center bg-no-repeat transition lg:w-96" />
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
    <li className="cursor-pointer text-primary hover:opacity-75">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </li>
  );
};

export default Hero;
