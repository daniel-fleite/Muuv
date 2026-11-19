import { Product } from "./products"

export type UsedCondition = "Excelente" | "Muito bom" | "Bom"
export type UsedStatus = "Disponível" | "Reservado" | "Vendido"

export type UsedProduct = Product & {
  condition: UsedCondition
  year?: number | null
  mileageKm?: number | null
  batteryHealth?: string | null
  usedWarranty?: string | null
  status?: UsedStatus
}

export const usedProducts: UsedProduct[] = [

]
