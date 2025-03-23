import { z, ZodType } from "zod"
import {
  FormAbilityData,
  FormAttackData,
  FormCardData,
  FormExchangeItemData,
  FormFlairItemData,
  FormSetData,
  FormSpecialShopTicketItemData,
  FormTradeTokenItemData,
  Rarity,
  SubTypes,
  SuperType,
  Types,
} from ".."

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
  packCode: z.string({
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

export const PackSchema: ZodType<FormSetData> = z.object({
  name: z.string({
    required_error: "required field",
    invalid_type_error: "Name is required",
  }),
  code: z.string({ message: "field required" }),
  releaseDate: z.string({ message: "field required" }),
  generation: z.string(),
  boosterPackList: z.string({ message: "field required" }),
})

export const AbilitiesSchema: ZodType<FormAbilityData> = z.object({
  name: z.string({
    required_error: "required field",
    invalid_type_error: "Name is required",
  }),
  text: z.string({ message: "field required" }),
  cardNumber: z.string({ message: "field required" }),
})

export const AttackSchema: ZodType<FormAttackData> = z.object({
  name: z.string({
    required_error: "required field",
    invalid_type_error: "Name is required",
  }),
  cost: z.string({ message: "field required" }),
  damage: z.string().optional(),
  text: z.string().optional(),
  convertedEnergyCost: z.number({ message: "field required" }),
  cardNumber: z.string({ message: "field required" }),
})
export const ExchangeItemSchema: ZodType<FormExchangeItemData> = z.object({
  exchangeMinCost: z.string({
    required_error: "required field",
    invalid_type_error: "exchangeMinCost is required",
  }),
  packPointsCost: z.string({ message: "field required" }),
  cardNumber: z.string({ message: "field required" }),
})
export const SpecialShopTicketsItemSchema: ZodType<FormSpecialShopTicketItemData> =
  z.object({
    quantity: z.string({
      required_error: "required field",
      invalid_type_error: "quantity is required",
    }),
    shineDustCost: z.string({ message: "field required" }),
    cardNumber: z.string({ message: "field required" }),
  })
export const TradeTokenItemSchema: ZodType<FormTradeTokenItemData> = z.object({
  quantity: z.string({
    required_error: "required field",
    invalid_type_error: "quantity is required",
  }),
  cardNumber: z.string({ message: "field required" }),
})

export const FlairItemSchema: ZodType<FormFlairItemData> = z.object({
  name: z.string({
    required_error: "required field",
    invalid_type_error: "name is required",
  }),
  shineDustCost: z.string({ message: "field required" }),
  cardNumber: z.string({ message: "field required" }),
})
