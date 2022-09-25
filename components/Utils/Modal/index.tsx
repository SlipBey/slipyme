import type { FC } from "react";
import {
  FiAlertCircle,
  FiCheckCircle,
  FiHelpCircle,
  FiX,
  FiXCircle,
} from "react-icons/fi";
import classNames from "classnames";
import { Button, types } from "../Button";

export interface IButton {
  title: string;
  type: keyof typeof types;
  onClick: () => void;
}

export interface IModal {
  title: string;
  text: string;
  type: keyof typeof types;
  open: boolean;
  setOpen: (open: boolean) => void;
  buttons?: IButton[];
}

const icons = {
  primary: FiCheckCircle,
  success: FiAlertCircle,
  warning: FiHelpCircle,
  error: FiXCircle,
};

const colors = {
  primary: "text-cyan-500",
  success: "text-green-500",
  warning: "text-yellow-500",
  error: "text-red-500",
};

export const Modal: FC<IModal> = ({
  title,
  text,
  type,
  open,
  setOpen,
  buttons,
}) => {
  const Icon = icons[type];

  return (
    <div
      className={classNames("fixed top-0 h-full w-full", {
        hidden: !open,
      })}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: "100" }}
    >
      <div className="m-auto my-16 rounded-lg bg-blue-100 p-12 text-center lg:my-32 lg:w-[633px]">
        <div className="flex justify-end">
          <button
            onClick={() => setOpen(false)}
            className="rounded-full bg-blue-300 p-1 duration-200 hover:bg-blue-400"
          >
            <FiX />
          </button>
        </div>
        <div className="mb-3 grid justify-items-center">
          <Icon className={classNames("h-16 w-16", colors[type])} />
        </div>
        <p className="text-6xl font-extrabold uppercase text-gray-800">
          {title}
        </p>
        <p className="mt-3 text-3xl font-bold leading-8 text-gray-600">
          {text}
        </p>
        {buttons && buttons.length && (
          <div className="mt-3">
            <div className="flex flex-row justify-center">
              {buttons.map((button, idx) => (
                <Button key={idx} type={button.type} onClick={button.onClick}>
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
