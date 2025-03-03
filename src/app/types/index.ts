import { FieldError, UseFormRegister, UseFormSetValue } from "react-hook-form"

export enum SuperType {
  POKEMON = "POKEMON",
  TRAINER = "TRAINER",
}

export enum SubTypes {
  BASIC = "BASIC",
  SUPPORTER = "SUPPORTER",
  ITEM = "ITEM",
  EX = "EX",
  STAGE_1 = "STAGE_1",
  STAGE_2 = "STAGE_2",
}

export enum Types {
  FIRE = "FIRE",
  FIGHTING = "FIGHTING",
  LIGHTNING = "LIGHTNING",
  WATER = "WATER",
  GRASS = "GRASS",
  PSYCHIC = "PSYCHIC",
  METAL = "METAL",
  DARKNESS = "DARKNESS",
  DRAGON = "DRAGON",
  NORMAL = "NORMAL",
}

export enum Rarity {
  ONE_DIAMOND = "ONE_DIAMOND",
  TWO_DIAMONDS = "TWO_DIAMONDS",
  THREE_DIAMONDS = "THREE_DIAMONDS",
  FOUR_DIAMONDS = "FOUR_DIAMONDS",
  ONE_START = "ONE_START",
  TWO_START = "TWO_START",
  THREE_START = "THREE_START",
  CROWN = "CROWN",
}

export type FormCardData = {
  name: string
  superType: SuperType
  subTypes: SubTypes
  hp?: string
  types: Types
  evolvesFrom?: string
  weakness?: Types
  retreatCost?: number
  setId: number
  packs: string
  number: string
  artist?: string
  rarity?: Rarity
  flavorText: string
  nationalPokedexNumber?: string
  flavorDescription?: string
  flavorHeight?: string
  flavorWeight?: string
  wonderPickCost: string
  exchangeItemId: number
  tradeTokenCost?: string
  generation?: string
  img: string
}

export interface InputProps {
  label: string
  type: string
  id: ValidFieldIds
  placeholder: string
  register: UseFormRegister<FormCardData>
  setValue?: UseFormSetValue<FormCardData>
  error?: FieldError | undefined
  valueAsNumber?: boolean
}

export type ValidFieldIds = keyof FormCardData
