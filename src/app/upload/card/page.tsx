"use client"
import { createCard } from "@/app/actions"
import { Input } from "@/app/components/ui/custom-input"
import { FormCardData } from "@/app/types"
import { CardSchema } from "@/app/types/validation-schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import React from "react"
import { useForm } from "react-hook-form"

const UploadCard = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormCardData>({
    resolver: zodResolver(CardSchema),
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data, "data")
    createCard(data)
  })
  return (
    <main className="flex flex-col px-6 py-12 bg-white">
      <h4 className="w-2xs p-2 text-2xl text-white border-1 border-[rgba(83,83,83,1)] drop-shadow-[-4px_-4px_2px_rgba(83,83,83,1)] bg-black">
        Data Upload Section
      </h4>
      <div className="flex container flex-col gap-y-3 mt-5 text-center">
        <div className="flex w-full justify-between">
          <div className="flex gap-6">
            <button
              onClick={() => router.push("/")}
              className="text-2xl justify-center p-2 text-black border-1 border-[rgba(83,83,83,1)] drop-shadow-[-4px_-4px_2px_rgba(83,83,83,1)] bg-white hover:bg-black  hover:text-white hover:drop-shadow-[-2px_-2px_2px_rgba(83,83,83,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 ease-in-out"
            >
              ⬅
            </button>
            <h4 className="w-fit p-2 text-xl border-1 border-[rgba(83,83,83,1)] drop-shadow-[-4px_-4px_2px_rgba(83,83,83,1)] bg-white">
              Add Card
            </h4>
          </div>

          <button
            onClick={onSubmit}
            className="flex w-fit justify-center p-2 text-black border-1 border-[rgba(83,83,83,1)] drop-shadow-[-4px_-4px_2px_rgba(83,83,83,1)] bg-white hover:bg-black  hover:text-white hover:drop-shadow-[-2px_-2px_2px_rgba(83,83,83,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            Submit Form
          </button>
        </div>

        <div className="flex flex-col gap-y-3 w-full">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid grid-cols-4 gap-x-24 w-full"
          >
            <Input
              label="name"
              type="text"
              id="name"
              placeholder="Pokemon card name..."
              register={register}
              error={errors.name}
            />
            <Input
              label="superType"
              type="text"
              id="superType"
              placeholder="Card superType..."
              register={register}
              setValue={setValue}
              error={errors.superType}
            />
            <Input
              label="subType"
              type="text"
              id="subTypes"
              placeholder="Card subType..."
              register={register}
              setValue={setValue}
              error={errors.subTypes}
            />
            <Input
              label="hp"
              type="text"
              id="hp"
              placeholder="Card hp..."
              register={register}
              error={errors.hp}
            />
            <Input
              label="types"
              type="text"
              id="types"
              placeholder="Card Type..."
              register={register}
              setValue={setValue}
              error={errors.types}
            />
            <Input
              label="evolves From"
              type="text"
              id="evolvesFrom"
              placeholder="Card pokemon evolves from..."
              register={register}
              error={errors.evolvesFrom}
            />
            <Input
              label="weakness"
              type="text"
              id="weakness"
              placeholder="Card Pokemon weakness..."
              register={register}
              setValue={setValue}
              error={errors.weakness}
            />
            <Input
              label="retreat Cost"
              type="number"
              id="retreatCost"
              placeholder="Card pokemon retreat cost..."
              register={register}
              error={errors.retreatCost}
              valueAsNumber
            />
            <Input
              label="set Id"
              type="number"
              id="setId"
              placeholder="Card set Id..."
              register={register}
              error={errors.setId}
              valueAsNumber
            />
            <Input
              label="Packs"
              type="text"
              id="packs"
              placeholder="Card packs?..."
              register={register}
              error={errors.packs}
            />
            <Input
              label="card Number"
              type="text"
              id="number"
              placeholder="Card number..."
              register={register}
              error={errors.number}
            />
            <Input
              label="artist"
              type="text"
              id="artist"
              placeholder="Card artist..."
              register={register}
              error={errors.artist}
            />
            <Input
              label="rarity"
              type="text"
              id="rarity"
              placeholder="Card rarity..."
              setValue={setValue}
              register={register}
              error={errors.rarity}
            />
            <Input
              label="flavor Text"
              type="text"
              id="flavorText"
              placeholder="Card flavor text..."
              register={register}
              error={errors.flavorText}
            />
            <Input
              label="national Pokedex Number"
              type="text"
              id="nationalPokedexNumber"
              placeholder="Pokemon national number..."
              register={register}
              error={errors.nationalPokedexNumber}
            />
            <Input
              label="flavor Description"
              type="text"
              id="flavorDescription"
              placeholder="Card flavor description..."
              register={register}
              error={errors.flavorDescription}
            />
            <Input
              label="flavor Height"
              type="text"
              id="flavorHeight"
              placeholder="Card flavor height..."
              register={register}
              error={errors.flavorHeight}
            />
            <Input
              label="flavor Weight"
              type="text"
              id="flavorWeight"
              placeholder="Card flavor weight..."
              register={register}
              error={errors.flavorWeight}
            />
            <Input
              label="card Wonder Pick Cost"
              type="text"
              id="wonderPickCost"
              placeholder="Card wonder pick cost..."
              register={register}
              error={errors.wonderPickCost}
            />
            <Input
              label="exchange Item Id"
              type="number"
              id="exchangeItemId"
              placeholder="Card exchange item id..."
              register={register}
              error={errors.exchangeItemId}
              valueAsNumber
            />

            <Input
              label="trade Token Cost"
              type="text"
              id="tradeTokenCost"
              placeholder="Card trade token cost..."
              register={register}
              error={errors.tradeTokenCost}
            />
            <Input
              label="generation"
              type="text"
              id="generation"
              placeholder="Card generation..."
              register={register}
              error={errors.generation}
            />
            <Input
              label="imagen"
              type="text"
              id="img"
              placeholder="Card imagen..."
              register={register}
              error={errors.img}
            />
          </form>
        </div>
      </div>
    </main>
  )
}

export default UploadCard
