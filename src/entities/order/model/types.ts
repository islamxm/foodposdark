import { Qunatity } from "@/shared/types/global"
import { Product } from '@/entities/product/@x/order'
export type OrderType = 'Dine In' | 'To Go' | 'Delivery'

export type Order = {
  userId: number
  product: Pick<Product, 'id' | 'price' | 'title' | 'thumbnail'>
  qunatity: Qunatity
  status: OrderStatus
  type: OrderType
  totalPayment: number,
  orderNote?: string
}

export type Orders = {
  id: number,
  data: Array<Order>
}

export type OrderStatus = 'completed' | 'preparing' | 'pending' | 'canceled'

export type PaymentMethod = 'credit-card' | 'paypal' | 'cash'

export type PaymentBase = {
  orderType: OrderType,
  tableNo: number
}

export type PaymentCreditCard = PaymentBase & {
  type: 'credit-card',
  cardholdreName: string,
  cardNumber: number
  expirationDate: string,
  cvv: number,
}

export type PaymentPaypal = PaymentBase & {
  type: 'paypal',
  accountNumber: string
}

export type PaymentCash = PaymentBase & {
  type: 'cash',
}

export type Payment = PaymentCreditCard | PaymentPaypal | PaymentCash