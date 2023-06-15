import Image from "next/image";

interface AboutProps {
  children?: React.ReactNode;
}

const About: React.FC<AboutProps> = () => {
  return (
    <section className="bg-white dark:bg-stone-800 px-3">
      <div className="flex flex-col lg:flex-row w-full max-w-screen-lg mx-auto py-24 lg:py-40 gap-10 text-center lg:text-left lg:gap-20">
        <div className="w-full flex items-center">
          <div className="relative mx-auto w-[450px] sm:h-[420px]">
            <Image src="/about.webp" className="object-cover min-h-[360px] h-full w-auto rounded-2xl" alt="About" width={1920} height={1080} />
            <div className="hidden sm:inline absolute -bottom-6 -right-8 bg-white/90 rounded-full w-[180px] h-[180px]">
              <div className="flex w-full h-full items-center justify-center">
              <Image src="/animate.png" className="h-[174px] w-[174px] opacity-90 animate-spin-slow" alt="About" width={400} height={400}/>  
              <Image src="/working.png" className="absolute top-[41px] left-[41px] h-12 w-12 translate-y-1/2 translate-x-1/2" alt="About" width={400} height={400}/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4">
          <h2 className="text-blue-500 text-lg font-bold dark:text-blue-400">ABOUT ME</h2>
          <h3 className="text-3xl font-bold text-stone-900 dark:text-stone-50">I&apos;m Joaquin Galoppo</h3>
          <p className="text-lg max-w-md text-stone-500 max-w-[45 0px] mx-auto text-justify lg:text-left lg:mx-0 dark:text-stone-400">
            I am a 20 year old student from Argentina. Experienced in building complex web apps, creating and working with RESTful APIs and developing single page applications. Passionate about writing clean code, following community standards and staying updated with the tech world. Quick learner, able to adapt to new tools. 
            <br/>
            <br/>
            Strong communicator, team player and self-motivated. Experience with SCRUM. Dedicated in delivering excellent results and always striving to exceed expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
