import {
  FieldError,
  UseFormRegister,
  UseFormSetValue,
  FieldValues,
  Path,
  UseFormGetValues,
} from "react-hook-form"

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
  packCode: string
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
export type FormSetData = {
  name: string
  code: string
  releaseDate: string
  generation: string
  boosterPackList: string
}
export type FormAbilityData = {
  name: string
  text: string
  cardNumber: string
}
export type FormAttackData = {
  name: string
  cost: string
  damage?: string
  text?: string
  convertedEnergyCost: number
  cardNumber: string
}
export type FormExchangeItemData = {
  exchangeMinCost: string
  packPointsCost: string
  cardNumber: string
}
export type FormSpecialShopTicketItemData = {
  quantity: string
  shineDustCost: string
  cardNumber: string
}
export type FormTradeTokenItemData = {
  quantity: string
  cardNumber: string
}
export type FormFlairItemData = {
  name: string
  shineDustCost: string
  cardNumber: string
}
export interface InputProps<T extends FieldValues> {
  label: string
  type: string
  id: Path<T>
  placeholder: string
  register: UseFormRegister<T>
  value?: UseFormGetValues<T>
  setValue?: UseFormSetValue<T>
  error?: FieldError | undefined
  valueAsNumber?: boolean
}
