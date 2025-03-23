"use client"

import { createExchangeItem } from "@/app/actions"
import Button from "@/app/components/ui/custom-button"
import { Input } from "@/app/components/ui/custom-input"
import { FormExchangeItemData } from "@/app/types"
import { ExchangeItemSchema } from "@/app/types/validation-schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

const UploadExchangeItem = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormExchangeItemData>({
    resolver: zodResolver(ExchangeItemSchema),
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data, "data")
    createExchangeItem(data)
  })
  return (
    <main className="flex flex-col px-6 py-12 bg-white">
      <h4 className="w-2xs p-2 text-2xl text-white border-1 border-[rgba(83,83,83,1)] drop-shadow-[-4px_-4px_2px_rgba(83,83,83,1)] bg-black">
        Data Upload Section
      </h4>
      <div className="flex container flex-col gap-y-3 mt-5 text-center">
        <div className="flex w-full justify-between">
          <div className="flex gap-6">
            <Button onClick={() => router.push("/")}>⬅</Button>
            <h4 className="w-fit p-2 text-xl border-1 border-[rgba(83,83,83,1)] drop-shadow-[-4px_-4px_2px_rgba(83,83,83,1)] bg-white">
              Add Exchange Item
            </h4>
          </div>

          <Button
            onClick={onSubmit}
            className="flex w-fit justify-center p-2 text-black border-1 border-[rgba(83,83,83,1)] drop-shadow-[-4px_-4px_2px_rgba(83,83,83,1)] bg-white hover:bg-black  hover:text-white hover:drop-shadow-[-2px_-2px_2px_rgba(83,83,83,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            Submit Form
          </Button>
        </div>

        <div className="flex flex-col gap-y-3 w-full">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="grid custom-template-grid gap-x-24 w-full"
          >
            <Input
              label="exchange Min Cost"
              type="text"
              id="exchangeMinCost"
              placeholder="How many cards to exchange..."
              register={register}
              error={errors.exchangeMinCost}
            />
            <Input
              label="pack Points Cost"
              type="text"
              id="packPointsCost"
              placeholder="How much Points cost..."
              register={register}
              error={errors.packPointsCost}
            />
            <Input
              label="card Number"
              type="text"
              id="cardNumber"
              placeholder="Card number..."
              register={register}
              error={errors.cardNumber}
            />
          </form>
        </div>
      </div>
    </main>
  )
}
export default UploadExchangeItem
