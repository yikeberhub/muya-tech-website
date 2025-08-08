const AboutIntro = () => {
    return (
      <section
        id="about-hero"
        className="relative h-[500px] mt-16
                   bg-gradient-to-r from-primary/10 to-accent/10
                   dark:from-primary-dark/20 dark:to-accent-dark/20"
      >
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-primary-dark leading-tight mb-4">
              About Muya Tech
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              We're a team of passionate technologists dedicated to creating innovative software solutions that transform businesses and enhance user experiences.
            </p>
          </div>
        </div>
  
        <div className="absolute bottom-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 100"
            fill="#ffffff"
            className="dark:fill-gray-900"
          >
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z" />
          </svg>
        </div>
      </section>
    );
  };
  
  export default AboutIntro;
  