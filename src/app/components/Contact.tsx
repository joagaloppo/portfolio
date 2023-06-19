import { FaLinkedin as LinkedIn, FaGithub as GitHub, FaLocationArrow as Location } from "react-icons/fa";

import { AiFillMail as Email } from "react-icons/ai";

const contactInfo = [
  {
    text: "Location",
    info: "Santa Fe, Argentina",
    icon: <Location className="h-5 w-auto text-primary" />,
    link: "https://goo.gl/maps/ScZNgetUA8bUgQYX7",
  },
  {
    text: "Email",
    info: "joaquingaloppo@gmail.com",
    icon: <Email className="h-6 w-auto text-primary" />,
    link: "mailto:joaquingaloppo@gmail.com",
  },
  {
    text: "Linkedin",
    info: "@joagaloppo",
    icon: <LinkedIn className="h-6 w-auto text-primary" />,
    link: "https://github.com/joagaloppo",
  },
  {
    text: "Github",
    info: "@joagaloppo",
    icon: <GitHub className="h-6 w-auto text-primary" />,
    link: "https://linkedin.com/in/joagaloppo",
  },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-white ">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col gap-10 px-3 py-24 text-center lg:flex-row lg:gap-20 lg:px-6 lg:py-40 lg:text-left">
        <div className="flex w-full flex-col gap-12">
          <div className="flex flex-col items-center gap-5 lg:items-start">
            <div className="mx-auto flex w-fit rounded-lg bg-primary px-4 py-[5px] text-stone-50 lg:mx-0">
              <span className="align-baseline text-xs font-semibold tracking-tight">CONTACT</span>
            </div>
            <div className="flex flex-col items-center gap-3 lg:items-start">
              <h3 className="text-3xl font-bold tracking-tight  text-primary">Get In Touch</h3>
              <p className="text-md max-w-md text-secondary">
                I&apos;m always open to new opportunities, so feel free to contact me if you have any questions or just
                want to say hi.
              </p>
            </div>
          </div>
          <div className="mx-auto flex w-fit max-w-full flex-col gap-12 gap-x-20 lg:mx-0 lg:grid lg:grid-cols-2">
            {contactInfo.map((info, index) => (
              <ContactInfo key={index} {...info} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo: React.FC<{
  text: string;
  info: string;
  icon: React.ReactNode;
  link: string;
}> = ({ text, info, icon, link }) => {
  return (
    <div className="mx-auto flex w-full max-w-md gap-8 overflow-visible lg:mx-0">
      <div className="flex h-20 min-w-[5rem] items-center justify-center rounded-full border border-secondary/10 bg-white text-primary shadow-[0px_0px_10px_rgba(0,0,0,0.08)]">
        {icon}
      </div>

      <div className="flex w-full max-w-md flex-col justify-center overflow-hidden">
        <span className="text-left text-xl font-semibold text-primary">{text}</span>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-md text-left font-normal text-secondary"
        >
          {info}
        </a>
      </div>
    </div>
  );
};

export default Contact;
