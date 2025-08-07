// src/components/layout/Footer.tsx
// This can be a Server Component unless it has client-side interactivity.

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">© {new Date().getFullYear()} Muya Tech. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
          <div className="mt-6 text-sm text-gray-400">
            Built with Next.js, React, Tailwind CSS
          </div>
        </div>
      </footer>
    );
  }