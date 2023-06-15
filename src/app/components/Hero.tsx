import Image from "next/image";

interface HeroProps {
  children?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="bg-stone-50 dark:bg-stone-900">

      <div className="min-h-[100svh] gap-8 max-w-screen-lg flex flex-col-reverse sm:flex-row sm:pt-0 px-3 sm:px-6 items-center mx-auto justify-center">

        <div className="flex flex-col items-center sm:items-start w-full gap-8 sm:gap-10">
          
          <span className="text-3xl sm:text-4xl lg:text-5xl text-center sm:text-left font-extrabold text-stone-900 dark:text-gray-100 sm:leading-[50px] leading-10 flex-grow">
            Full-stack TypeScript <br />
            Developer
            <Image className="inline-flex ml-4" src="/hand.png" alt="Hero" width={50} height={50} />
          </span>

          <span className="text-lg sm:text-base lg:text-lg font-normal max-w-lg text-center sm:text-left text-stone-900 dark:text-gray-100">
            I&apos;m Joaquin, a developer specializing in TypeScript. Passionate about creating elegant, accessible, and
            high-performance web applications
          </span>

          <ul className="flex justify-center sm:justify-start gap-4">
            <li className="text-stone-900 dark:text-gray-100 cursor-pointer hover:opacity-75">
              <a href="https://www.linkedin.com/in/joagaloppo" target="_blank" rel="noopener noreferrer">
                <svg width={30} height={30} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="text-stone-900 dark:text-gray-100 cursor-pointer hover:opacity-75">
              <a href="https://github.com/joagaloppo" target="_blank" rel="noopener noreferrer">
                <svg width={30} height={30} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>

        </div>

        <div className="w-fit hidden sm:inline" bg-gray-200>
          <Image
            className="lg:w-full sm:w-11/12 mx-auto rounded-full"
            src="/profile.jpg"
            alt="Hero"
            width={500}
            height={500}
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
