"use client"

import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  return (
    <main className="flex flex-col px-6 py-12 bg-white">
      <h4 className="w-2xs p-2 text-2xl text-white border-1 border-[rgba(83,83,83,1)] drop-shadow-[-4px_-4px_2px_rgba(83,83,83,1)] bg-black">
        Data Upload Section
      </h4>

      <ul className="flex flex-col gap-3 py-5">
        <li
          className="text-xl w-fit px-2 text-black border-1 border-[rgba(83,83,83,1)] hover:bg-black hover:text-white hover:drop-shadow-[-2px_2px_2px_rgba(83,83,83,1)] drop-shadow-[-4px_4px_2px_rgba(83,83,83,1)] bg-white hover:-translate-x-1 hover:translate-y-1 transition-all duration-300 ease-in-out cursor-pointer"
          onClick={() => router.push("/upload/card")}
        >
          Add Card
        </li>

        <li className="text-xl w-fit px-2 text-black border-1 border-[rgba(83,83,83,1)] hover:bg-black hover:text-white hover:drop-shadow-[-2px_2px_2px_rgba(83,83,83,1)] drop-shadow-[-4px_4px_2px_rgba(83,83,83,1)] bg-white hover:-translate-x-1 hover:translate-y-1 transition-all duration-300 ease-in-out cursor-pointer">
          Add Set
        </li>
      </ul>
    </main>
  )
}
