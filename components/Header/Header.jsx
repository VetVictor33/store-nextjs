"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import Logo from '@/public/assets/logo.jpg'
import './Header.css'
import MenuDialog from '../MenuDialog/MenuDialog'
import CartDialog from '../CartDialog/CartDialog'

const categories = [
  { id: 1, name: 'Eletrônicos', slug: 'eletronicos' },
  { id: 2, name: 'Cozinha', slug: 'cozinha' },
  { id: 3, name: 'Lar', slug: 'lar' },
  { id: 4, name: 'Roupas', slug: 'roupas' },
  { id: 5, name: 'Sapatos', slug: 'sapatos' },
  { id: 6, name: 'Esporte', slug: 'esporte' },
]

export default function Header() {
  const menuDialog = useRef(null);
  const cartDialog = useRef(null);
  const [menuDialogStatus, setMenuDialogStatus] = useState(false);
  const [cartDialogStatus, setCartDialogStatus] = useState(false);

  const handleMenuDialog = () => {
    if (!menuDialogStatus) {
      menuDialog.current.showModal();
    } else {
      menuDialog.current.close();
    }

    setMenuDialogStatus(!menuDialogStatus)
  }
  const handleCartDialog = () => {
    if (!cartDialogStatus) {
      cartDialog.current.showModal();
    } else {
      cartDialog.current.close();
    }

    setCartDialogStatus(!cartDialogStatus)
  }



  return (
    <header className='Header'>
      <div className="logo" onClick={handleMenuDialog}>
        <Image src={Logo} width={30} alt='logo' />
      </div>
      <nav className='nav-links'>
        <div className='shown-links'>
          <Link href={'/'}>Destaques</Link>
          <Link href={'/produtos/categorias'}>Categorias</Link>
        </div>

        <MenuDialog
          menuDialog={menuDialog}
          handleMenuDialog={handleMenuDialog}
          categoryMock={categories}
        />

      </nav>
      <p onClick={handleCartDialog}>Carrinho</p>
      <CartDialog
        cartDialog={cartDialog}
        handleCartDialog={handleCartDialog}
      />

    </header>
  )
}
