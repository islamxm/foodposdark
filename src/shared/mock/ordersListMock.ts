import { Order } from "@/entities/order/model/types";
import { productListMock } from "./productListMock";

export const ordersListMock: Array<Order> = productListMock.map(product => ({
  userId: 1,
  product,
  qunatity: { value: 2, unit: 'pt' },
  status: 'pending',
  type: 'Dine In',
  totalPayment: 2.30,
}))