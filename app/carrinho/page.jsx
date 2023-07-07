"use client"
import { getItem } from '@/utils/storage'
import React from 'react'

export default function Cart() {
  const cart = getItem('cart')
  return (
    <div>
      {cart?.map(item => {
        return (
          <p>{item.name}</p>
        )
      })}
    </div>
  )
}
