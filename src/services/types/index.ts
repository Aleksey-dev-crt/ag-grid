type TColor = {
  name: string
}

export type THistogram = {
  date: string,
  amount: number
}

export type TCardsDetail = {
  brand: string,
  brandId: number,
  colors: TColor[],
  feedbacks: number,
  id: number,
  name: string,
  priceU: number,
  rating: number,
  sale: number,
  salePriceU: number,
  siteBrandId: number,
  subjectId: number,
  subjectParentId: number,
  supplierId: number,
};
