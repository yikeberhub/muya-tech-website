// src/app/page.tsx
import Head from 'next/head'; // Head is generally not needed as much in App Router with Metadata API

// This is a Server Component by default.
// Add 'use client' if you need client-side interactivity on the home page itself.
// "use client";

export default function HomePage() {
  return (
    <>
      {/* Head component for specific page metadata is less common in App Router.
          Instead, define metadata directly in this file as an export.
          For a quick test, you can still use it, but prefer the Metadata export.
      */}
      {/* <Head>
        <title>My Portfolio - Home</title>
        <meta name="description" content="Welcome to my Next.js portfolio website" />
      </Head> */}

      <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fadeInUp">
            Hello! This is Next.js Portfolio Website.
          </h1>
          <p className="text-xl md:text-2xl opacity-0 animate-fadeInUp animation-delay-500">
            Showcasing my passion for creating powerful web experiences.
          </p>
          <div className="mt-8 space-x-4 opacity-0 animate-fadeInUp animation-delay-1000">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300">
              Explore Projects
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Example for more content sections */}
      <section className="py-20 bg-gray-100 text-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What I Do</h2>
          <p className="max-w-2xl mx-auto">
            I specialize in full-stack development, crafting robust backend systems
            and intuitive, responsive user interfaces.
          </p>
        </div>
      </section>
    </>
  );
}


// --- App Router Metadata (Replaces Head component for SEO/Metadata) ---
// This is automatically picked up by Next.js
export const metadata = {
  title: 'Home | Muya Tech Portfolio',
  description: 'Welcome to Muya Tech Portfolio - showcasing innovative web development projects and services.',
};