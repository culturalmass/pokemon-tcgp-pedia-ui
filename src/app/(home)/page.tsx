"use client"

import { useRouter } from "next/navigation"
import Button from "../components/ui/custom-button"
import Card from "../components/ui/card"
import { FormCardData, SubTypes, SuperType, Types } from "../types"

const cardData: FormCardData = {
  name: "Picachu",
  superType: SuperType.POKEMON,
  subTypes: SubTypes.BASIC,
  hp: "60",
  types: Types.LIGHTNING,
  weakness: Types.FIGHTING,
  retreatCost: 1,
  packCode: "PROMO-A",
  packs: "PROMO-A",
  number: "9",
  artist: "Atsushi Furusawa",
  flavorText:
    "When it is angered, it immediately discharges the energy in the pouches in its checks.",
  nationalPokedexNumber: "25",
  wonderPickCost: "4",
  exchangeItemId: 1,
  tradeTokenCost: "500",
  generation: "I",
  img: "https://archives.bulbagarden.net/media/upload/4/4c/PikachuPromo-A9.png",
}

export default function Home() {
  const router = useRouter()
  return (
    <main className="flex flex-col px-6 py-12 bg-white">
      <h1 className="w-fit p-2 text-4xl text-white border-1 border-[rgba(83,83,83,1)] drop-shadow-[-4px_-4px_2px_rgba(83,83,83,1)] bg-black">
        Exchange Cards for Pokemon TCGP
      </h1>

      <ul className="flex flex-col gap-3 py-5">
        <li>
          <Button invert onClick={() => router.push("/upload")}>
            Upload Cards Info Section
          </Button>
        </li>
      </ul>
      <div className="grid custom-template-grid-for-cards gap-[0.24rem] w-full">
        <Card cardData={cardData} invert />
        <Card cardData={cardData} invert />
        <Card cardData={cardData} invert />
        <Card cardData={cardData} invert />
        <Card cardData={cardData} invert />
      </div>
    </main>
  )
}
