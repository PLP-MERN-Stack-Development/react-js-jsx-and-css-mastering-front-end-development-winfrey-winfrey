import React from "react";
import { cva } from "class-variance-authority";
const buttonVariants = cva("rounded-md", {
  variants: {
    variant: {
      primary: "bg-purple-600 text-white hover:bg-purple-700 ",
      secondary: "bg-blue-600 text-white hover:bg-blue-700",
      danger: "bg-red-600 text-white hover:bg-red-700 ",
    },
  },
  defaultVariants: { variant: "primary" },
});
export default function Button({ children, className, variant, ...props }) {
  return (
    <button
      type="button"
      className={buttonVariants({ variant, className })}
      {...props}
    >
      {children}
    </button>
  );
}
