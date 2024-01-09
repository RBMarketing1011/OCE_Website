'use client'

import Link from 'next/link'
import { useRef, useEffect, useState } from 'react'
import { FaFacebookF, FaInstagram, FaEnvelope, FaBars, FaXmark } from 'react-icons/fa6'

import Links from './Links'

import styles from './page.module.css'

const Header = () =>
{
  // Fadeout navbar on scroll down, Fadein on scroll up
  const headerRef = useRef(null)

  // useEffect(() =>
  // {
  //   let scrollPosition = 0
  //   window.addEventListener('scroll', () =>
  //   {
  //     if (window.scrollY >= scrollPosition + 145)
  //     {
  //       headerRef.current.style.opacity = '0'
  //       scrollPosition = window.scrollY
  //     } else if (window.scrollY < scrollPosition - 145)
  //     {
  //       headerRef.current.style.opacity = '1'
  //       scrollPosition = window.scrollY
  //     }
  //   })
  // })

  // Open Mobile Menu on Icon Click 
  const menuRef = useRef(null)
  const [ openMenu, setOpenMenu ] = useState(false)

  const openMobileMenu = () =>
  {
    if (!openMenu)
    {
      menuRef.current.style.left = '0'
      setOpenMenu(!openMenu)
    } else if (openMenu)
    {
      menuRef.current.style.left = '100%'
      setOpenMenu(!openMenu)
    }
  }

  return (
    <header className={ `${ styles.Header } bg-primary color-light flex justify-between align-center` } ref={ headerRef }>
      <div className={ styles.brand }>
        <Link href='/'><img src="/icons/OCE_Shade.png" alt="Omni Coffee & Eggs | Logo" /></Link>
      </div>
      {/* Hamburger Icon For Mobile */ }
      <div className={ styles.menuBars }>

        {
          !openMenu ?
            <Link href='#' onClick={ openMobileMenu }><FaBars size={ 40 } /></Link>
            :
            <Link href='#' onClick={ openMobileMenu }><FaXmark size={ 40 } /></Link>
        }

      </div>

      <div className={ `${ styles.menu } medium fw-500 uppercase flex justify-between align-center` } ref={ menuRef }>
        <div className={ `${ styles.links } flex justify-center align-center` }>
          <Links
            clickHandler={ openMobileMenu }
            links={ [
              {
                text: 'Our Story',
                href: '/our-story',
              },
              {
                text: 'Events',
                href: '/events',
              },
              {
                text: 'Catering',
                href: '/catering',
              },
              {
                text: 'Parking',
                href: '/parking',
              },
              {
                text: 'Contact Us',
                href: '/contact-us',
              },
            ] }
          />
        </div>

        <div className={ `${ styles.orderBtn } flex justify-end align-center` }>
          <div className={ `${ styles.socials } flex justify-center align-center` }>
            <Link href='mailto:info@omnicoffeeandeggs.com'>
              <FaEnvelope size={ 30 } />
            </Link>

            <Link href='https://facebook.com/omnicoffeeandeggs'>
              <FaFacebookF size={ 30 } />
            </Link>

            <Link href='https://instagram.com/omnicoffeeandeggs'>
              <FaInstagram size={ 30 } />
            </Link>
          </div>
          <div className="btnGroup">
            <Link
              href="https://order.toasttab.com/online/omnicoffeeandeggs"
              className='btn medium btn-accent btn-solid'>
              Order Online
            </Link>
          </div>
        </div>
      </div>

    </header>
  )
}

export default Header