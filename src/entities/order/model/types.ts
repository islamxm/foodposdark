export type OrderType = 'Dine In' | 'To Go' | 'Delivery'
export type Order = {
  userId: number
  productId: number,
  qunatity: number,
  status: OrderStatus,
  totalPayment: number
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



