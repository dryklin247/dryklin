import Image from "next/image";
import Link from "next/link";
import React from "react";

const Section1 = () => {
  return (
    <section className="relative z-10 container mx-auto px-4 py-6 md:pt-12">
      <div className="absolute top-0 left-0 w-full -z-10">
        <Image
          className="w-auto h-auto object-cover"
          src={"/bg-hero.png"}
          alt="hero background"
          width={1184}
          height={560}
          priority={true}
        />
      </div>
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="absolute top-10 md:top-7 left-4 w-full -z-10">
          <Image
            className="w-auto h-16 md:h-24 object-cover rotate-6 animate-float"
            src={"/basket.svg"}
            alt="hero background"
            width={173}
            height={150}
            // quality={90}
            priority={true}
          />
        </div>
        <div className="absolute top-40 md:top-28 right-7 -z-10 animate-float-reverse">
          <Image
            className="w-auto h-14 md:h-20 object-cover rotate-4 -z-20"
            src={"/iron.svg"}
            alt="hero background"
            width={126}
            height={112}
            // quality={90}
            priority={true}
          />
        </div>
        <div className="inline-flex items-center gap-1 bg-[#FFF6F2] text-[#131313] py-3 px-5 md:px-7 rounded-lg text-sm font-medium mb-6">
          NO. 1 LAUNDRY SERVICE APP
          <Image
            className="w-4 h-4 object-cover"
            src={"/solar-star.png"}
            alt="star icon"
            width={24}
            height={24}
          />
        </div>

        <h1 className="text-4xl text-[#E86317] md:text-[#131313] md:text-6xl leading-12 md:leading-16 font-bold mb-6 z-50">
          Welcome to DryKlin:
          <br />
          Laundry Service at your
          <br />
          Fingertips!
        </h1>

        <p className="text-[#131313] text-center mb-8 max-w-3xl mx-auto">
          With Dryklin, laundry is hassle-free. Schedule pickups effortlessly,
          leaving you more time to do what you love. We ensure your clothes are
          fresh and clean every time. Experience ease and comfort. Download the
          DryKlin App today!
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="https://play.google.com/"
            target="_blank"
            className="inline-block"
          >
            <Image
              src="/google-play.png"
              alt="Get it on Google Play"
              width={201.42}
              height={60}
              quality={90}
              className="h-12 md:h-14 w-auto object-cover"
            />
          </Link>
          <Link
            href="https://www.apple.com/app-store/"
            target="_blank"
            className="inline-block"
          >
            <Image
              src="/apple-store.png"
              alt="Download on the App Store"
              width={179.49}
              height={60}
              quality={90}
              className="h-12 md:h-14 w-auto object-cover"
            />
          </Link>
        </div>
        <div className="relative hidden md:block container mx-auto mt-16">
          <div className="absolute top-16 -left-10 w-full">
            <Image
              className="w-auto h-24 object-cover rotate-4 animate-float-slow"
              src={"/machine.svg"}
              alt="hero background"
              width={148.91}
              height={117.39}
              quality={90}
              priority={true}
            />
          </div>
          <div className="absolute bottom-20 right-10 animate-float">
            <Image
              className="w-auto h-16 object-cover rotate-4"
              src={"/emoji.svg"}
              alt="hero background"
              width={80}
              height={80}
            />
          </div>
          <Image
            src={"/bg-hero2-opt.svg"}
            alt="hero image"
            width={1184} 
            height={560}
            priority={true}
            className="object-cover w-auto h-auto"
          />
        </div>
        <div className="relative md:hidden flex items-center justify-center w-full mt-16">
          <div className="absolute top-0 left-0 w-full">
            <Image
              className="w-auto h-20 object-cover rotate-4 animate-float-slow"
              src={"/machine.svg"}
              alt="hero background"
              width={127}
              height={127}
            />
          </div>
          <div className="absolute bottom-2 right-10 animate-float">
            <Image
              className="w-auto h-12 object-cover rotate-4"
              src={"/emoji.svg"}
              alt="hero background"
              width={80}
              height={80}
            />
          </div>
          <Image
            src={"/gif-anime-opt.svg"} 
            alt="hero image"
            width={345}
            height={161}
            priority={true}
            className="object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
