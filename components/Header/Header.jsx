"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import Logo from '@/public/assets/logo.jpg'
import './Header.css'
import MenuDialog from '../MenuDialog/MenuDialog'

const categoryMock = [
  { id: 1, name: 'Eletrônicos', slug: 'eletronicos' },
  { id: 2, name: 'Cozinha', slug: 'cozinha' },
  { id: 3, name: 'Lar', slug: 'lar' },
  { id: 4, name: 'Roupas', slug: 'roupas' },
  { id: 5, name: 'Sapatos', slug: 'sapatos' },
  { id: 6, name: 'Esporte', slug: 'esporte' },
]

export default function Header() {
  const menuDialog = useRef(null);
  const [dialogStatus, setDialogStatus] = useState(false)

  const handleMenuDialog = () => {
    if (!dialogStatus) {
      menuDialog.current.showModal();
    } else {
      menuDialog.current.close();
    }

    setDialogStatus(!dialogStatus)
  }



  return (
    <header className='Header'>
      <div className="logo" onClick={handleMenuDialog}>
        <Image src={Logo} width={30} alt='logo' />
      </div>
      <nav className='nav-links'>
        <div className='shown-links'>
          <Link href={'/'}>Destaques</Link>
          <Link href={'/products/category/all-categories'}>Categorias</Link>
        </div>

        <MenuDialog
          menuDialog={menuDialog}
          handleMenuDialog={handleMenuDialog}
          categoryMock={categoryMock}
          dialogStatus={dialogStatus}
        />

      </nav>
      <Link href={'/cart'}>Carrinho</Link>
    </header>
  )
}
