import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <section id="contact-info" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Email Us Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-border dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-accent mb-4">
              <svg
                className="w-10 h-10"
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Email Us</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">General Inquiries:</p>
            <p className="text-primary font-medium mb-4">info@muyatech.com</p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Support:</p>
            <p className="text-primary font-medium">support@muyatech.com</p>
          </div>

          {/* Call Us Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-border dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-accent mb-4">
              <svg
                className="w-10 h-10"
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
              >
                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Call Us</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Main Office:</p>
            <p className="text-primary font-medium mb-4">+1 (555) 123-4567</p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Customer Support:</p>
            <p className="text-primary font-medium">+1 (555) 987-6543</p>
          </div>

          {/* Visit Us Card */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-border dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
            <div className="text-accent mb-4">
              <svg
                className="w-10 h-10"
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                fill="currentColor"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Visit Us</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Headquarters:</p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              123 Tech Park, Innovation Street
              <br />
              San Francisco, CA 94107
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Business Hours:</p>
            <p className="text-gray-700 dark:text-gray-300">
              Monday - Friday: 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
