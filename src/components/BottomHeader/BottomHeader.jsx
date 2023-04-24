import Link from 'next/link';
import React from 'react';
import { GoHome } from 'react-icons/go';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { BiCrown } from 'react-icons/bi';
import { RiHonourLine } from 'react-icons/ri';




function BottomHeader() {
  return (
    <header className='fixed bottom-0 left-0 w-full px-24 py-4 border-t-2 border-lightBrown'>
      <nav className='container'>
        <ul className='flex flex-row justify-around'>
          <li className='text-lg gap-2'>
            <Link href={'/'} className='flex flex-col items-center capitalize font-semibold'>
              <GoHome />
              <span>home</span>
            </Link>
          </li>
          <li className='items-center text-lg gap-2'>
            <Link href={'/menu'} className='flex flex-col items-center capitalize font-semibold'>
              <MdOutlineRestaurantMenu />
              <span>menu</span>
            </Link>
          </li>
          <li className='items-center text-lg gap-2'>
            <Link href={'/offers'} className='flex flex-col items-center capitalize font-semibold'>
              <BiCrown />
              <span>offers</span>
            </Link>
          </li>
          <li className='items-center text-lg gap-2'>
            <Link href={'/rewards'} className='flex flex-col items-center capitalize font-semibold'>
              <RiHonourLine />
              <span>rewrda</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default BottomHeader