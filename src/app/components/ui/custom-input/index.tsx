import { InputProps, Rarity, SubTypes, SuperType, Types } from "@/app/types"
import { useState } from "react"

export const Input = ({
  label,
  type,
  id,
  placeholder,
  register,
  valueAsNumber,
  setValue,
  error,
}: InputProps) => {
  const [onFocus, setOnFocus] = useState(false)
  const needSelector =
    id === "superType" ||
    id === "subTypes" ||
    id === "types" ||
    id === "rarity" ||
    id === "weakness"
      ? true
      : false
  const options =
    id === "superType"
      ? Object.keys(SuperType)
      : id === "subTypes"
      ? Object.keys(SubTypes)
      : id === "types" || id === "weakness"
      ? Object.keys(Types)
      : id === "rarity"
      ? Object.keys(Rarity)
      : []

  const handleSelector = (value: string) => {
    setValue?.(id, value)
    setOnFocus(false)
  }

  return (
    <div className="relative flex flex-col w-full gap-px pb-2">
      <div className="flex justify-between pl-2">
        <label htmlFor={id} className="font-semibold capitalize">
          {label}
        </label>
        <p
          className={`flex w-fit items-center gap-1 px-2 font-semibold text-white bg-red-500 drop-shadow-[-2px_-2px_2px_rgba(83,83,83,1)] ${
            error?.message
              ? "translate-y-px opacity-100"
              : "translate-y-8 opacity-0"
          } transition-all duration-500 ease-[cubic-bezier(0.68,-0.6,0.32,1.6)]`}
        >
          {error?.message}
        </p>
      </div>
      <input
        id={id}
        type={type}
        className="w-full p-3 text-xl font-medium border-1 border-[rgba(83,83,83,1)] drop-shadow-[-4px_4px_2px_rgba(83,83,83,1)] bg-white placeholder:opacity-60 outline-none"
        placeholder={placeholder}
        {...register(id, { valueAsNumber })}
        onFocus={() => setOnFocus(true)}
      />
      <div
        className={`absolute top-0 translate-y-20 w-full flex flex-col justify-center items-center bg-black z-10 drop-shadow-[4px_4px_2px_rgba(83,83,83,1)] ${
          needSelector && onFocus
            ? "scale-100 opacity-100"
            : "scale-0 opacity-0"
        } transition-all duration-300 ease-in-out`}
      >
        {options.map((item, i) => (
          <button
            key={i}
            className="w-full text-left pl-3 text-white lowercase hover:text-black hover:bg-white hover:translate-x-px hover:translate-y-px transition-all duration-300 ease-in-out"
            onClick={() => handleSelector(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}
