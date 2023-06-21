import Image from "next/image";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-white ">
      <div className="mx-auto flex w-full max-w-screen-lg flex-col gap-y-6 px-4 py-24 text-center lg:flex-row lg:gap-20 lg:px-6 lg:py-40 lg:text-left">
        <div className="flex w-full items-center">
          <div className="relative mx-auto h-[340px] max-w-md sm:w-full lg:h-full">
            <Image
              src="/about.webp"
              className="h-full w-auto rounded-2xl object-cover"
              alt="About"
              width={1920}
              height={1080}
            />
            <div className="absolute -bottom-6 -right-8 hidden h-[180px] w-[180px] translate-x-0 rounded-full bg-white/90 sm:inline">
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  src="/animate.png"
                  className="h-[174px] w-[174px] animate-spin-slow opacity-80"
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
        <div className="mx-auto flex w-full max-w-md flex-col gap-4">
          <div className="flex w-fit rounded-lg bg-primary px-4 py-[5px] text-stone-50 lg:mx-0">
            <span className="align-baseline text-[10px] font-semibold tracking-tight lg:text-xs">ABOUT ME</span>
          </div>
          <h3 className="mx-auto w-full max-w-md text-left text-2xl font-bold tracking-tight text-primary lg:text-3xl">
            I&apos;m Joaquin Galoppo
          </h3>
          <p className="text-md mx-auto max-w-md text-left text-secondary lg:mx-0 lg:text-lg ">
            Twenty year old developer from Argentina. Experienced in building complex web apps, creating and working
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
