import { z, ZodType } from "zod"
import { FormCardData, Rarity, SubTypes, SuperType, Types } from ".."

export const CardSchema: ZodType<FormCardData> = z.object({
  name: z.string({
    required_error: "required field",
    invalid_type_error: "Name is required",
  }),
  superType: z.nativeEnum(SuperType, { message: "field required" }),
  subTypes: z.nativeEnum(SubTypes, { message: "field required" }),
  hp: z.string().optional(),
  types: z.nativeEnum(Types, { message: "field required" }),
  evolvesFrom: z.string().optional(),
  weakness: z.nativeEnum(Types, { message: "field required" }).optional(),
  retreatCost: z.number({ message: "field required" }).optional(),
  setId: z.number({
    message: "field required",
  }),
  packs: z.string({
    required_error: "required field",
    invalid_type_error: "field required",
  }),
  number: z.string({
    required_error: "required field",
    invalid_type_error: "field required",
  }),
  artist: z.string().optional(),
  rarity: z.nativeEnum(Rarity, { message: "field required" }).optional(),
  flavorText: z.string({
    required_error: "required field",
    invalid_type_error: "field required",
  }),
  nationalPokedexNumber: z.string().optional(),
  flavorDescription: z.string().optional(),
  flavorHeight: z.string().optional(),
  flavorWeight: z.string().optional(),
  wonderPickCost: z.string({
    required_error: "required field",
    invalid_type_error: "field required",
  }),
  exchangeItemId: z.number({
    required_error: "required field",
    invalid_type_error: "field required",
  }),
  tradeTokenCost: z.string().optional(),
  generation: z.string().optional(),
  img: z.string({
    required_error: "required field",
    invalid_type_error: "field required",
  }),
})
