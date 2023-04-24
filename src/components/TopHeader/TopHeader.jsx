import Image from 'next/image';
import React from 'react';

import { FaBars } from 'react-icons/fa';
import { BsFillCartCheckFill } from 'react-icons/bs';
import Link from 'next/link';



function TopHeader() {
  return (
    <div className='border-b-2 border-lightBrown pb-5 pt-2 px-20'>
     <div className="container flex flex-row justify-between items-center h-14">
        <div className='text-lg cursor-pointer'>
          <FaBars />
        </div>
        <div className="hover:bg-lightBrown p-1">
          <Link href={'/'}>
            <Image
               src="/logo.png"
               width={50}
               height={50}
               alt='logo'
             />
          </Link>
        </div>
        <div className=' bg-brown text-white rounded-full text-sm font-bold py-3 px-6 '>
          <Link href={'/cart'} className='flex flex-row items-center gap-3 '>
           <BsFillCartCheckFill />
           <span>$22.36</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopHeader