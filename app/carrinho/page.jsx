"use client"
import { getTotalPrice } from '@/utils/cartUtils'
import { refactorCurrencyFromCents } from '@/utils/refactor'
import { getItem, setItem } from '@/utils/storage'
import React, { useState } from 'react'
import CartItem from '@/components/CartItem/CartItem'

export default function Cart() {
  const [cart, setCart] = useState(getItem('cart'))
  const handleAmountChange = (itemId, change) => {
    const localCart = [...cart]
    const item = localCart.find((element) => element.id === itemId);
    const index = localCart.findIndex(element => element.id === item.id)
    switch (change) {
      case '-':
        if (item.amount <= 1) {
          localCart.splice(index, 1)
        } else {
          item.amount--
        }
        break;
      case '+':
        item.amount++
        break;
      case 0:
        localCart.splice(index, 1)
        break
    }
    setItem('cart', localCart)
    setCart(localCart)
  }
  return (
    <div>
      {cart &&
        cart?.map(item => {
          return (
            <CartItem key={item.id} item={item} handleAmountChange={handleAmountChange} />
          )
        })
      }
      {cart.length >= 1 ?
        <p> Total: {refactorCurrencyFromCents(getTotalPrice(cart))}</p>
        :
        <p>Ops! Carrinho vazio</p>
      }
    </div >
  )
}
