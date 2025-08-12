// src/app/layout.tsx
import '../styles/styles.css';
import { Inter } from 'next/font/google';
import { ReduxProvider } from '../providers/ReduxProvider';
import Header from '../components/layout/Header'; 
import Footer from '../components/layout/Footer';

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
          <div className="flex flex-col min-h-screen">
            <Header /> 
            <main className="flex-grow"> 
              {children}
            </main>
            <Footer /> 
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}