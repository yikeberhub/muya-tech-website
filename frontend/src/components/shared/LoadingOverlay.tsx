// src/components/shared/LoadingOverlay.tsx
import React from "react";
import { ClipLoader } from "react-spinners";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingOverlayProps {
  loading: boolean;
  fullScreen?: boolean; // true = full page, false = component
  size?: number; // spinner size
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  loading,
  fullScreen = true,
  size = 50,
}) => {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className={`${
            fullScreen ? "fixed inset-0" : "absolute inset-0"
          } flex items-center justify-center z-50 bg-white bg-opacity-30 backdrop-blur-sm`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ClipLoader color="#3B82F6" size={size} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingOverlay;
