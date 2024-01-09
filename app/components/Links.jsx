'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Links = ({ links, clickHandler }) =>
{
  const pathname = usePathname()
  return (
    <>
      {
        links.map((link, i) => (
          <Link key={ i } className={ `navLink ${ pathname == link.href ? 'active' : '' }` } href={ link.href } onClick={ clickHandler }>
            { link.text }
          </Link>
        ))
      }
    </>
  )
}

export default Links