import React from 'react';

interface EyeIconProps {
  isVisible: boolean;
  onClick: () => void;
}

const EyeIcon: React.FC<EyeIconProps> = ({ isVisible, onClick }) => {
  return (
    <button
      type="button"
      className="p-1 focus:outline-none "
      onClick={onClick}
    >
      {isVisible ? (
        // 👁 Eye icon (password visible)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-gray-600 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 
               4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-gray-600 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.875 18.825A9.956 9.956 0 0112 19c-4.418 
               0-8-3.582-8-8 0-1.607.465-3.104 1.27-4.375M9.88 9.88A3 
               3 0 0114.12 14.12M6.1 6.1l11.8 11.8M17.73 17.73A9.956 
               9.956 0 0021 12c0-1.607-.465-3.104-1.27-4.375M9.88 
               9.88L6.1 6.1"
          />
        </svg>
      )}
    </button>
  );
};

export default EyeIcon;
