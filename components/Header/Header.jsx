"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import Logo from '@/public/assets/logo.jpg'
import './Header.css'

const categoryMock = [
  { id: 1, name: 'Eletrônicos', slug: 'eletronicos' },
  { id: 2, name: 'Cozinha', slug: 'cozinha' },
  { id: 3, name: 'Lar', slug: 'lar' },
  { id: 4, name: 'Roupas', slug: 'roupas' },
  { id: 5, name: 'Sapatos', slug: 'sapatos' },
  { id: 6, name: 'Esporte', slug: 'esporte' },
]

export default function Header() {
  const dialog = useRef(null);
  const [dialogStatus, setDialogStatus] = useState(false)

  const handleDialog = () => {
    if (!dialogStatus) {
      dialog.current.showModal()
    } else {
      dialog.current.close()
    }
    setDialogStatus(!dialogStatus)
  }

  return (
    <header className='Header'>
      <div className="logo" onClick={handleDialog}>
        <Image src={Logo} width={30} />
      </div>
      <nav className='nav-links'>
        <div className='shown-links'>
          <Link href={'/'}>Destaques</Link>
          <Link href={'/products/category/all-categories'}>Categorias</Link>
        </div>

        <dialog ref={dialog} className='categories-list'>

          <Link className='title highlight' href={'/'}>Destaques</Link>
          <p className='close-bt' onClick={handleDialog}>X</p>

          <p className='title'>Categorias:</p>

          {categoryMock.map(category => (
            <Link className='item' key={category.id} href={`/products/category/${category.slug}`}>{category.name}</Link>
          ))}

        </dialog>

      </nav>
      <Link href={'/cart'}>Carrinho</Link>
    </header>
  )
}
