// src/app/(auth)/layout.tsx

export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="min-h-screen flex items-center justify-center  px-4 sm:px-6 lg:px-8 dark:bg-gray-900 ">
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg border border-gray-200 dark:bg-gray-900 dark:border-purple-700">
          {children}
        </div>
      </div>
    );
  }