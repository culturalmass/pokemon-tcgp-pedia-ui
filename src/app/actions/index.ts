"use server"

import {
  FormAbilityData,
  FormAttackData,
  FormCardData,
  FormExchangeItemData,
  FormFlairItemData,
  FormSetData,
  FormSpecialShopTicketItemData,
  FormTradeTokenItemData,
} from "../types"

export const createCard = async (card: FormCardData) => {
  try {
    const res = await fetch("http://localhost:3000/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}
export const createSet = async (set: FormSetData) => {
  try {
    const res = await fetch("http://localhost:3000/sets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(set),
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}
export const createAbility = async (ability: FormAbilityData) => {
  try {
    const res = await fetch("http://localhost:3000/abilities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ability),
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

export const createAttack = async (ability: FormAttackData) => {
  try {
    const res = await fetch("http://localhost:3000/attacks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ability),
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

export const createExchangeItem = async (
  exchangeItem: FormExchangeItemData
) => {
  try {
    const res = await fetch("http://localhost:3000/exchange-items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exchangeItem),
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

export const createSpecialShopTicketItem = async (
  specialShopTicketItem: FormSpecialShopTicketItemData
) => {
  try {
    const res = await fetch("http://localhost:3000/special-shop-tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(specialShopTicketItem),
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}
export const createTradeTokenItem = async (
  tradeTokenItem: FormTradeTokenItemData
) => {
  try {
    const res = await fetch("http://localhost:3000/trade-tokens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tradeTokenItem),
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

export const createFlairsItem = async (flairItem: FormFlairItemData) => {
  try {
    const res = await fetch("http://localhost:3000/flairs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(flairItem),
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}
