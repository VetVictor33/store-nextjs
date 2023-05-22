"use client"
import Image from 'next/image'
import './Footer.css'
import Facebook from '@/public/assets/social-media-icons/facebook.png'
import Instagram from '@/public/assets/social-media-icons/instagram.png'
import Twitter from '@/public/assets/social-media-icons/twitter.png'
import Whatsapp from '@/public/assets/social-media-icons/whatsapp.png'
import Logo from '@/public/assets/logo.jpg'
import { usePathname } from 'next/navigation'
import Link from 'next/link'


export default function Footer() {
  const path = usePathname()

  return (
    <footer className='Footer'>
      <div className="logo">
        <Image src={Logo} width={60} />
      </div>
      <div className='social-media'>
        <Image src={Facebook} alt='facebook' width={'30'} height={'30'} />
        <Image src={Instagram} alt='instagram' width={'30'} height={'30'} />
        <Image src={Twitter} alt='twitter' width={'30'} height={'30'} />
        <Image src={Whatsapp} alt='whatsapp' width={'30'} height={'30'} />
      </div>
      <div className='store-info'>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>

      <div className='top-bt bt'>
        <Link href={`${path}`}>Voltar para o topo</Link>
      </div>

      <div className='legal-info'>
        <p>CNPJ 12.345.678/0000001-23</p>
        <p>Av. Nextjs, JavaScrip - ESMAScript@2023 - Rio de Janeiro, Brasil</p>
        <p>victorjfeliciano@gmail.com</p>

        <h3>Art Credits:</h3>
        <a href="https://www.freepik.com/">Freepik</a>
      </div>
    </footer>
  )
}
