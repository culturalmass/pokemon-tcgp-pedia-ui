"use client"

import { useRouter } from "next/navigation"
import Button from "../components/ui/custom-button"

export default function Home() {
  const router = useRouter()
  return (
    <main className="flex flex-col px-6 py-12 bg-white">
      <h4 className="w-2xs p-2 text-2xl text-white border-1 border-[rgba(83,83,83,1)] drop-shadow-[-4px_-4px_2px_rgba(83,83,83,1)] bg-black">
        Data Upload Section
      </h4>

      <ul className="flex flex-col gap-3 py-5">
        <Button invert onClick={() => router.push("/upload/card")}>
          Add Card
        </Button>
        <Button invert onClick={() => router.push("/upload/pack")}>
          Add Pack
        </Button>
        <Button invert onClick={() => router.push("/upload/ability")}>
          Add Ability
        </Button>
        <Button invert onClick={() => router.push("/upload/attack")}>
          Add Attack
        </Button>
        <Button invert onClick={() => router.push("/upload/exchange-item")}>
          Add Exchange Item
        </Button>
        <Button
          invert
          onClick={() => router.push("/upload/special-shop-ticket")}
        >
          Add Special Shop Ticket Item
        </Button>
        <Button invert onClick={() => router.push("/upload/trade-token")}>
          Add Trade Token Item
        </Button>
        <Button invert onClick={() => router.push("/upload/flair")}>
          Add Flair Item
        </Button>
      </ul>
    </main>
  )
}
