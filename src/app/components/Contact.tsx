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
    link: "https://linkedin.com/in/joagaloppo",
  },
  {
    text: "Github",
    info: "@joagaloppo",
    icon: <GitHub className="h-6 w-auto text-primary" />,
    link: "https://github.com/joagaloppo",
  },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-white ">
      <div className="mx-auto flex w-full max-w-md flex-col gap-10 px-4 py-24 text-left lg:max-w-screen-lg lg:flex-row lg:gap-20 lg:px-6 lg:py-40">
        <div className="flex w-full flex-col gap-8 lg:gap-12">
          <div className="flex flex-col items-start gap-5">
            <div className="flex w-fit rounded-lg bg-primary px-4 py-[5px] text-stone-50 lg:mx-0">
              <span className="text-[10px] font-semibold tracking-tight lg:text-xs">CONTACT</span>
            </div>
            <div className="flex flex-col items-start gap-3">
              <h3 className="text-2xl font-bold tracking-tight text-primary  lg:text-3xl">Get In Touch</h3>
              <p className="text-md max-w-md tracking-tight text-secondary lg:max-w-lg lg:text-lg">
                I&apos;m always open to new opportunities, so feel free to contact me if you have any questions or just
                want to say hi.
              </p>
            </div>
          </div>
          <div className="flex w-fit max-w-full flex-col gap-8 gap-x-20 lg:mx-0 lg:grid lg:grid-cols-2 lg:gap-12">
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
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="mx-auto flex w-full max-w-md gap-6 lg:gap-8 overflow-visible lg:mx-0">
        <div className="flex h-[4.5rem] min-w-[4.5rem] items-center justify-center rounded-full border border-secondary/20 bg-white text-primary lg:h-20 lg:min-w-[5rem]">
          {icon}
        </div>

        <div className="flex w-full max-w-md flex-col justify-center overflow-hidden">
          <span className="text-left text-md font-semibold text-primary lg:text-lg">{text}</span>
          <span className="text-left text-sm font-normal text-secondary lg:text-md">{info}</span>
        </div>
      </div>
    </a>
  );
};

export default Contact;
