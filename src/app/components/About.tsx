import Image from "next/image";

interface AboutProps {
  children?: React.ReactNode;
}

const About: React.FC<AboutProps> = () => {
  return (
    <section id="about" className="bg-white ">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col gap-10 px-3 py-24 text-center lg:flex-row lg:gap-20 lg:px-6 lg:py-40 lg:text-left">
        <div className="flex w-full items-center">
          <div className="relative mx-auto h-[380px] lg:h-[450px] max-w-md sm:w-full">
            <Image
              src="/about.webp"
              className="h-full min-h-[380px] w-auto rounded-2xl object-cover"
              alt="About"
              width={1920}
              height={1080}
            />
            <div className="absolute -bottom-6 -right-8 hidden h-[180px] w-[180px] translate-x-0 rounded-full bg-white/90 sm:inline">
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src="/animate.png"
                  className="h-[174px] w-[174px] animate-spin-slow opacity-90"
                  alt="About"
                  width={400}
                  height={400}
                />
                <Image
                  src="/working.png"
                  className="absolute left-[41px] top-[41px] h-12 w-12 translate-x-1/2 translate-y-1/2"
                  alt="About"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h2 className="text-lg font-bold text-blue-500 ">ABOUT ME</h2>
          <h3 className="text-3xl font-bold tracking-tight  text-stone-900">I&apos;m Joaquin Galoppo</h3>
          <p className="mx-auto max-w-md text-left text-lg text-stone-500 lg:mx-0 ">
            I am a 20 year old student from Argentina. Experienced in building complex web apps, creating and working
            with RESTful APIs and developing single page applications. Passionate about writing clean code, following
            community standards and staying updated with the tech world. Quick learner, able to adapt to new tools.
            <br />
            <br />
            Strong communicator, team player and self-motivated. Experience with SCRUM. Dedicated in delivering
            excellent results and always striving to exceed expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;