"use client";

import React from "react";

interface AlertMessageProps {
  type?: "success" | "error" | "info";
  message: string;
}

const colors = {
  success: "bg-green-100 text-green-800 border-green-300",
  error: "bg-red-100 text-red-800 border-red-300",
  info: "bg-blue-100 text-blue-800 border-blue-300",
};

const AlertMessage: React.FC<AlertMessageProps> = ({ type = "info", message }) => {
  return (
    <div
      className={`w-full p-3 mb-4 border rounded-md text-center ${
        colors[type]
      }`}
    >
      {message}
    </div>
  );
};

export default AlertMessage;
