"use client";

import { ToastContainer, type ToastContainerProps } from "react-toastify";
import { useTheme } from "next-themes";

//@ts-ignore
import "react-toastify/dist/ReactToastify.css";

export function ToasterClient(props: Partial<ToastContainerProps> = {}) {
  const { resolvedTheme } = useTheme();
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3500}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      draggable
      theme={resolvedTheme === "dark" ? "dark" : "light"}
      {...props}
    />
  );
}
