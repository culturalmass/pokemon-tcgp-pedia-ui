"use client"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { Input } from "@/app/components/ui/custom-input"
import { FormSetData } from "@/app/types"
import { PackSchema } from "@/app/types/validation-schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { createSet } from "@/app/actions"
import Button from "@/app/components/ui/custom-button"

const UploadSet = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSetData>({
    resolver: zodResolver(PackSchema),
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data, "data")
    createSet(data)
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
              Add Pack
            </h4>
          </div>
          <Button onClick={onSubmit}>Submit Form</Button>
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
              placeholder="set name..."
              register={register}
              error={errors.name}
            />

            <Input
              label="code"
              type="text"
              id="code"
              placeholder="set code..."
              register={register}
              error={errors.code}
            />
            <Input
              label="release Date"
              type="text"
              id="releaseDate"
              placeholder="Set release date..."
              register={register}
              error={errors.releaseDate}
            />
            <Input
              label="generation"
              type="text"
              id="generation"
              placeholder="Set generation..."
              register={register}
              error={errors.generation}
            />
            <Input
              label="boosterPackList"
              type="text"
              id="boosterPackList"
              placeholder="Set booster packs..."
              register={register}
              error={errors.boosterPackList}
            />
          </form>
        </div>
      </div>
    </main>
  )
}

export default UploadSet
