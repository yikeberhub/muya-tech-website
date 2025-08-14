"use client";

import React, { useEffect, useState } from "react";
import { FiCheckCircle, FiInfo, FiAlertCircle } from "react-icons/fi";

interface AlertMessageProps {
  type?: "success" | "error" | "info";
  message: string;
  duration?: number; // milliseconds before auto-hide
}

const alertStyles = {
  success: "bg-green-100 text-green-800 border-green-300",
  error: "bg-red-100 text-red-800 border-red-300",
  info: "bg-blue-100 text-blue-800 border-blue-300",
};

const alertIcons = {
  success: <FiCheckCircle className="mr-2 w-5 h-5" />,
  error: <FiAlertCircle className="mr-2 w-5 h-5" />,
  info: <FiInfo className="mr-2 w-5 h-5" />,
};

const AlertMessage: React.FC<AlertMessageProps> = ({
  type = "info",
  message,
  duration = 3000,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div
      className={`flex items-center w-full max-w-md mx-auto p-4 mb-4 border rounded-lg shadow-md transition-all duration-300 ease-in-out ${alertStyles[type]}`}
    >
      {alertIcons[type]}
      <span className="flex-1 text-sm font-medium">{message}</span>
    </div>
  );
};

export default AlertMessage;
