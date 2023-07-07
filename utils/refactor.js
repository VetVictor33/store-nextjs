export function refactorCurrencyFromCents(price) {
  const refactoredPrice = (price / 100).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })
  return refactoredPrice
}