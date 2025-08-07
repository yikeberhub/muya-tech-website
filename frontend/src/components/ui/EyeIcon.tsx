import React from 'react';

interface EyeIconProps {
  isVisible: boolean;
  onClick: () => void; // Callback function for clicks
}

const EyeIcon: React.FC<EyeIconProps> = ({ isVisible, onClick }) => {
  return (
    <button
      type="button"
      className=" relative flex items-center justify-center w-10 h-10 rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none"
      onClick={onClick}
    >
      {isVisible ? (
        <svg
          className="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13.875 18.825A9.956 9.956 0 0112 19c-4.418 0-8-3.582-8-8s3.582-8 8-8c1.264 0 2.464.253 3.563.708M16.5 14.763l4.325 4.325M12 12l3.75 3.75m-3.75-3.75L16.5 9.238M6.75 9.238l-4.325 4.325M12 12l-3.75-3.75m3.75 3.75L8.25 14.763"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13.875 18.825A9.956 9.956 0 0112 19c-4.418 0-8-3.582-8-8s3.582-8 8-8c1.264 0 2.464.253 3.563.708M16.5 12c-.55 0-1.125.1-1.688.293M12 12l-3.75 3.75m0-3.75l3.75-3.75M4.5 12c0 1.25.25 2.5.688 3.563M15.375 18.825A9.956 9.956 0 0112 19c-4.418 0-8-3.582-8-8s3.582-8 8-8c1.264 0 2.464.253 3.563.708"
          />
        </svg>
      )}
    </button>
  );
};

export default EyeIcon;