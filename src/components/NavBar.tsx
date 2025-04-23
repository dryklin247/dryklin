'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavBar = () => {
    const pathname = usePathname()


    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/contact", label: "Contact Us" },
    ]

  return (
    <div className='flex items-center justify-between w-full bg-white px-5 md:px-20 py-4 md:py-5'>
        <Link href={'/'} className=''>
            <Image
                src={'/dryklin.png'}
                alt='dryklin logo'
                width={229.37}
                height={48}
                className='w-30 md:w-32 h-auto object-cover'
            />
        </Link>
        <div className='hidden md:flex gap-6 items-center'>
            {navLinks.map((link, index)=>(
                <Link key={index} href={link.href} className='flex flex-col justify-center items-center gap-0.5'>
                    <span className={`link ${pathname === link.href ? "text-[#131313] font-normal": "text-[#6D6D6D] font-light"} text-base`}>{link.label}</span>
                    {pathname === link.href ? <span className='transform transition-all duration-1000 ease-in-out w-2.5 h-1 rounded-full bg-[#E86317]' /> : <span className='w-2.5 h-1 bg-none' />}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default NavBar