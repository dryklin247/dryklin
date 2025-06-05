import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Section5 = () => {
  return (
    <section className='max-w-7xl md:pt-10 px-10 w-full mx-auto flex flex-col md:flex-row items-center justify-center'>
        <div className='w-full md:w-1/2'>
            <h2 className="text-3xl md:text-4xl leading-11 text-[#E86317] font-bold text-center md:text-left mb-3">
            Download DryKlin
            <br />
            Mobile App Now!
            </h2>
            <p className="text-center md:text-left text-[#131313] mb-7">
            Enjoy the ultimate solution for seamless and hassle-free <br />laundry services.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
          <Link href="https://play.google.com/" target="_blank" className="inline-block">
            <Image
              src="/google-play.png"
              alt="Get it on Google Play"
              width={201.42}
              height={60}
              quality={90}
              priority={true}
              className="h-12 md:h-10 w-auto object-cover"
            />
          </Link>
          <Link href="https://www.apple.com/app-store/" target='_blank' className="inline-block">
            <Image
              src="/apple-store.png"
              alt="Download on the App Store"
              width={179.49}
              height={60}
              quality={90}
              priority={true}
              className="h-12 md:h-10 w-auto object-cover"
            />
          </Link>
        </div>
        </div>
        <div className='-ml-32 hidden md:block w-1/2'>
            <Image
                src={'/iphone-hero.png'}
                alt='bg hero'
                width={749.74}
                height={550}
                className='object-cover h-auto w-auto'
            />
        </div>
        <div className='block w-full md:hidden mt-10'>
            <Image
                src={'/homepage-opt.svg'}
                alt='bg hero'
                width={201}
                height={161}
                className='object-cover w-full h-auto'
            />
        </div>
    </section>
  )
}

export default Section5