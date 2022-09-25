import type { FC, ReactNode } from "react";
import classNames from "classnames";

export interface IButton {
  children: ReactNode;
  type: keyof typeof types;
  onClick?: () => void;
  className?: string;
}

export const types = {
  primary: "bg-sky-600 hover:bg-sky-700 focus:ring-sky-200",
  success: "bg-green-600 hover:bg-green-700 focus:ring-green-200",
  warning: "bg-orange-600 hover:bg-orange-700 focus:ring-orange-200",
  error: "bg-red-600 hover:bg-red-700 focus:ring-red-200",
};

export const Button: FC<IButton> = ({ children, type, onClick, className }) => (
  <div
    onClick={onClick}
    className={classNames(
      "inline-flex cursor-pointer items-center rounded-lg px-5 py-2.5 text-center font-medium text-white text-sm duration-200",
      types[type],
      className
    )}
  >
    {children}
  </div>
);
