import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className='Header'>
      <div className="logo">logo</div>
      <Link href={'/cart'}>Carrinho</Link>
      <nav>
        <Link href={'/'}>Destaques</Link>
        <Link href={'/products/category/all-categories'}>Categorias</Link>
        <nav>
          <Link href={'/products/category/home'}>Lar</Link>
          <Link href={'/products/category/eletronics'}>Eletrônicos</Link>
          <Link href={'/products/category/kitchen'}>Cozinha</Link>
          <Link href={'/products/category/games'}>Jogos</Link>
        </nav>
      </nav>
    </header>
  )
}
