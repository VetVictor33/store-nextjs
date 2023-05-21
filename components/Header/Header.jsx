import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '@/public/assets/logo.jpg'
import './Header.css'

export default function Header() {
  return (
    <header className='Header'>
      <div className="logo">
        <Image src={Logo} width={30} />
      </div>
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
