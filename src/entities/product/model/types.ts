export type Product = {
  id: number,
  title: string,
  price: number,
  available: {
    availableCount: number,
    availableUnit: string
  },
  thumbnail?: any
}