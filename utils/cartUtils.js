export function getTotalPrice(itens) {
  if (itens.length < 1) return
  const priceArray = itens.map(item => item.price * item.amount)
  const totalprice = priceArray.reduce((previous, current) => {
    return previous + current
  })
  return totalprice
}