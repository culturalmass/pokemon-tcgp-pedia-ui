import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  invert?: boolean
}

const Button = ({ children, invert = false, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`justify-center text-black border-1 border-[rgba(83,83,83,1)] bg-white hover:bg-black hover:text-white cursor-pointer ${
        invert
          ? "w-fit text-xl px-2 drop-shadow-[-4px_4px_2px_rgba(83,83,83,1)] hover:drop-shadow-[-2px_2px_2px_rgba(83,83,83,1)] hover:-translate-x-1 hover:translate-y-1"
          : "text-2xl p-2 drop-shadow-[-4px_-4px_2px_rgba(83,83,83,1)] hover:drop-shadow-[-2px_-2px_2px_rgba(83,83,83,1)] hover:-translate-x-1 hover:-translate-y-1"
      } transition-all duration-300 ease-in-out`}
    >
      {children}
    </button>
  )
}

export default Button
