
import { cx } from "@/utils";
import React from "react";

type ButtonProps = {
  text: string;
  className?: string
};
const Button = ({ text, ...props }: ButtonProps) => {
  return (
    <a
    
      className={cx("p-3 border rounded-sm w-36 text-white", props.className!)}
    >
      {text}
    </a>
  );
};

export default Button;
