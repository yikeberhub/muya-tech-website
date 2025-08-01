import "../styles/styles.css" // Import global styles, including Tailwind

export const metadata = {
  title: 'My App',
  description: 'My Next.js App with Tailwind CSS',
};



const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;