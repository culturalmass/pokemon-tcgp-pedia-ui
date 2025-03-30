import { FormCardData } from "@/app/types"
import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  cardData: FormCardData
  invert?: boolean
}

const Card = ({ cardData, invert = false, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`relative flex text-black rounded-[1.7rem] bg-white hover:bg-black hover:text-white group cursor-pointer ${
        invert
          ? "w-fit drop-shadow-[-4px_4px_2px_rgba(83,83,83,1)] hover:drop-shadow-[-2px_2px_2px_rgba(83,83,83,1)] hover:-translate-x-1 hover:translate-y-1"
          : "w-fit drop-shadow-[-4px_-4px_2px_rgba(83,83,83,1)] hover:drop-shadow-[-2px_-2px_2px_rgba(83,83,83,1)] hover:-translate-x-1 hover:-translate-y-1"
      } transition-all duration-300 ease-in-out`}
    >
      <img
        src={cardData.img}
        alt={cardData.name}
        loading="lazy"
        className="w-full h-[13rem] object-contain"
      />
      <aside className="absolute top-0 left-0 flex w-0 group-hover:w-[3rem] h-full translate-x-[9.6rem] overflow-hidden bg-black z-10 rounded-[0.7rem] transition-all duration-300 ease-in-out">
        <span>Add to My Need Collection</span>
        <span>Add to My Have to Trade Collection</span>
      </aside>
    </button>
  )
}

export default Card
