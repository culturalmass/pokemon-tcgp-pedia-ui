"use server"

import { FormCardData } from "../types"

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
