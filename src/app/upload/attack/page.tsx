"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { createAttack } from "@/app/actions"
import Button from "@/app/components/ui/custom-button"
import { Input } from "@/app/components/ui/custom-input"
import { FormAttackData } from "@/app/types"
import { AttackSchema } from "@/app/types/validation-schemas"

const UploadAttack = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormAttackData>({
    resolver: zodResolver(AttackSchema),
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data, "data")
    createAttack(data)
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
              Add Attack
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
              label="name"
              type="text"
              id="name"
              placeholder="Attack name..."
              register={register}
              error={errors.name}
            />

            <Input
              label="cost"
              type="text"
              id="cost"
              placeholder="Attack cost..."
              register={register}
              error={errors.cost}
              setValue={setValue}
              value={getValues}
            />
            <Input
              label="damage"
              type="text"
              id="damage"
              placeholder="Attack damage..."
              register={register}
              error={errors.damage}
            />
            <Input
              label="description"
              type="text"
              id="text"
              placeholder="Attack description..."
              register={register}
              error={errors.text}
            />
            <Input
              label="convertedEnergyCost"
              type="text"
              id="convertedEnergyCost"
              placeholder="Converted energy cost..."
              register={register}
              error={errors.convertedEnergyCost}
              valueAsNumber
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
export default UploadAttack
