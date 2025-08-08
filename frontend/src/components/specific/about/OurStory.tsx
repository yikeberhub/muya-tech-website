const OurStory = () => {
    return (
      <section id="company-overview" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                className="rounded-lg shadow-xl"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/28b359697b-a29eb2a30e30b0ac53c9.png"
                alt="modern tech company office with developers working on computers, collaborative workspace with glass walls and tech atmosphere"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary dark:text-primary-dark mb-4">
                Our Story
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Founded in 2010, Muya Tech began as a small team of developers with a shared vision: to create software that makes a difference. Over the years, we've grown into a full-service technology company delivering innovative solutions to clients across various industries.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Our journey has been marked by continuous learning, adaptation, and a commitment to excellence. We've evolved from building simple web applications to developing complex enterprise systems, mobile apps, and SaaS platforms that serve thousands of users worldwide.
              </p>
              <div
                id="mission-statement"
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-border dark:border-gray-700 mt-8"
              >
                <h3 className="text-xl font-semibold text-primary dark:text-primary-dark mb-3">
                  Our Mission
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation while delivering exceptional user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default OurStory;
  