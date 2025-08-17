// src/components/shared/LoadingSpinner.tsx
"use client";

import { motion } from "framer-motion";
import React from "react";

interface LoadingSpinnerProps {
  size?: number;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 48,
  fullScreen = false,
}) => {
  return (
    <div
      className={`flex items-center justify-center ${
        fullScreen ? "fixed inset-0 z-50 bg-white bg-opacity-30 backdrop-blur-sm" : "relative"
      }`}
    >
      <motion.div
        className="border-4 border-blue-500 border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        style={{
          width: size,
          height: size,
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
