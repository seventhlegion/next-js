import Link from 'next/link'
import React, { useState } from 'react'
import { StyledNav } from './Styles/Nav.style'

export default function Nav() {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link href={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link href={'/Posts/About'}>
            About
          </Link>
        </li>
        <li>
          <Link href={'/Posts/Products'}>
            Products
          </Link>
        </li>
        <li>
          <Link href={'/Posts/Locator'}>
            Locator
          </Link>
        </li>
        <li>
          <Link href={'/Posts/News'}>
            News
          </Link>
        </li>
      </ul>
      <button>
        Light mode
      </button>
    </StyledNav>
  )
}
