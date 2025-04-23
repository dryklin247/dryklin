import { IconBrandX } from "@tabler/icons-react"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear()

  return (
    <footer className="bg-[#E86317] text-white py-10 px-4 md:px-12 lg:px-16">
    <div className="container mx-auto md:px-16">
      <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between mb-10">
        <div className="mb-6 md:mb-0">
          <Link href="/" className="flex items-center mb-6">
            <Image
                src={'/dryklin-white.png'}
                alt='dryklin logo'
                width={229.37}
                height={48}
                className='w-32 md:w-32 h-auto object-cover'
            />
          </Link>

          <div className="flex space-x-4 text-orange-100">
            <Link href="#" className="hover:text-orange-200 transition-colors">
              <Instagram size={24} />
            </Link>
            <Link href="#" className="hover:text-orange-200 transition-colors">
              <IconBrandX size={24} />
            </Link>
            <Link href="#" className="hover:text-orange-200 transition-colors">
              <Facebook size={24} />
            </Link>
            <Link href="#" className="hover:text-orange-200 transition-colors">
              <Linkedin size={24} />
            </Link>
          </div>
        </div>

        <div className="mb-6 md:mb-0">
          <ul className="space-y-2">
            <li>
              <Link href="/" className="font-light hover:text-orange-200 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-light hover:text-orange-200 transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <ul className="space-y-4 font-light">
            <li className="flex items-center">
              <Phone size={22} className="mr-2" />
              <span>+234 707 137 9503</span>
            </li>
            <li className="flex items-center">
              <Mail size={22} className="mr-2" />
              <span>dryklin247@gmail.com</span>
            </li>
            <li className="flex items-start">
              <MapPin size={22} className="mr-2 mt-1" />
              <span className="hidden md:block">8th floor, Cocoa House, Dugbe <br />Ibadan, Oyo State</span>
              <span className="block md:hidden">8th floor, Cocoa House, Dugbe Ibadan, Oyo State</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-orange-400 pt-6 text-center">
        <p className="text-[#FFFFFF] text-sm font-light">{`Copyright© ${year} DryKlin. All Rights Reserved.`}</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer