export function refactorPrice(price, currency, sale) {
    const localSale = sale ? sale : 1;
    const refactoredPrice = `${currency} ${((price / 100) * localSale).toFixed(2)}`
    return refactoredPrice
}

export function totalPrice(itens, currency, sale) {
    let total = 0;
    itens.forEach(item => total += item.price);
    const response = refactorPrice(total, currency, sale);
    return response
}