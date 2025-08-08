const MissionAndVision = () => {
    return (
      <section id="values-vision" className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary dark:text-primary-dark mb-4">
              Our Values &amp; Vision
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide our work and the future we're building together.
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 gap-12">
            {/* Core Values */}
            <div id="our-values">
              <h3 className="text-2xl font-semibold text-primary dark:text-primary-dark mb-6">
                Core Values
              </h3>
              <div className="space-y-6">
                {/* Innovation */}
                <div id="value-innovation" className="flex">
                  <div className="text-accent mr-4 mt-1">
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                      fill="currentColor"
                    >
                      <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Innovation</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      We constantly seek new ideas and approaches to solve complex problems and create better solutions.
                    </p>
                  </div>
                </div>
  
                {/* Excellence */}
                <div id="value-excellence" className="flex">
                  <div className="text-accent mr-4 mt-1">
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fill="currentColor"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Excellence</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      We strive for the highest quality in everything we do, from code to customer service.
                    </p>
                  </div>
                </div>
  
                {/* Collaboration */}
                <div id="value-collaboration" className="flex">
                  <div className="text-accent mr-4 mt-1">
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      fill="currentColor"
                    >
                      <path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3V245.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5V416c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V389.2C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112h32c24 0 46.2 7.5 64.4 20.3zM448 416V394.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176h32c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2V416c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3V261.7c-10 11.3-16 26.1-16 42.3zm144-42.3v84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2V448c0 17.7-14.3 32-32 32H288c-17.7 0-32-14.3-32-32V405.2c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112h32c61.9 0 112 50.1 112 112z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Collaboration</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      We believe in the power of teamwork and partnership with our clients to achieve shared goals.
                    </p>
                  </div>
                </div>
  
                {/* Integrity */}
                <div id="value-integrity" className="flex">
                  <div className="text-accent mr-4 mt-1">
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      focusable="false"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                    >
                      <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-2">Integrity</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      We act with honesty, transparency, and ethical responsibility in all our interactions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Our Vision */}
            <div id="our-vision">
              <h3 className="text-2xl font-semibold text-primary dark:text-primary-dark mb-6">
                Our Vision
              </h3>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-border dark:border-gray-700">
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  At Muya Tech, we envision a future where technology seamlessly enhances human potential and business capabilities. We aim to be at the forefront of this transformation, creating software that is not just functional but transformative.
                </p>
  
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Our vision extends beyond just building products – we're committed to:
                </p>
  
                <ul className="space-y-4">
                  {[
                    "Becoming a global leader in innovative software solutions",
                    "Creating technology that makes a positive impact on society",
                    "Building lasting partnerships with our clients based on mutual growth",
                    "Fostering a culture of continuous learning and innovation",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="text-accent w-5 h-5 mt-1 mr-3 flex-shrink-0"
                        aria-hidden="true"
                        focusable="false"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                      >
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default MissionAndVision;
  