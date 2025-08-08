// src/app/layout.tsx
import '../styles/styles.css';
import { Inter } from 'next/font/google';
import { ReduxProvider } from '../providers/ReduxProvider';
import Header from '../components/layout/Header'; // Import Header
import Footer from '../components/layout/Footer'; // Import Footer

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Muya Tech Portfolio',
  description: 'A professional portfolio showcasing web development expertise.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <div className="flex flex-col min-h-screen"> {/* Use flexbox for sticky footer */}
            <Header /> 
            <main className="flex-grow"> {/* Main content grows to fill space */}
              {children}
            </main>
            <Footer /> 
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}