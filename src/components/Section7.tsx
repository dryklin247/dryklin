"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "./ui/separator";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const Section7 = () => {
  const reviews = [
    {
      name: "Oladipupo Hakeem",
      role: "Photographer & Creative Director",
      date: "01-06-2025",
      message:
        "“Convenient app, prompt pickups, and fresh laundry every time. Cleenar makes my life so much easier!”",
      src: "/carousel-image.png",
    },
    {
      name: "Oladipupo Hakeem",
      role: "Photographer & Creative Director",
      date: "01-06-2025",
      message:
        "“Convenient app, prompt pickups, and fresh laundry every time. Cleenar makes my life so much easier!”",
      src: "/carousel-image.png",
    },
    {
      name: "Oladipupo Hakeem",
      role: "Photographer & Creative Director",
      date: "01-06-2025",
      message:
        "“Convenient app, prompt pickups, and fresh laundry every time. Cleenar makes my life so much easier!”",
      src: "/carousel-image.png",
    },
    {
      name: "Oladipupo Hakeem",
      role: "Photographer & Creative Director",
      date: "01-06-2025",
      message:
        "“Convenient app, prompt pickups, and fresh laundry every time. Cleenar makes my life so much easier!”",
      src: "/carousel-image.png",
    },
    {
      name: "Oladipupo Hakeem",
      role: "Photographer & Creative Director",
      date: "01-06-2025",
      message:
        "“Convenient app, prompt pickups, and fresh laundry every time. Cleenar makes my life so much easier!”",
      src: "/carousel-image.png",
    },
    {
      name: "Oladipupo Hakeem",
      role: "Photographer & Creative Director",
      date: "01-06-2025",
      message:
        "“Convenient app, prompt pickups, and fresh laundry every time. Cleenar makes my life so much easier!”",
      src: "/carousel-image.png",
    },
  ];

  return (
    <div className="bg-[#E86317] py-12 px-2 block md:hidden mb-10">
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full mx-auto"
      >
        <CarouselContent className="">
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="">
              <div className="p-1">
                <Card className="p-0 shadow-none border-none">
                  <CardContent className="flex flex-col items-center justify-center p-3 gap-5">
                    <div className="flex flex-col gap-3">
                      <div className="w-24 h-24">
                        <Image
                          src={"/quote.png"}
                          alt="quote image"
                          width={68}
                          height={50.03}
                          className="object-cover h-auto w-full"
                        />
                      </div>
                      <div className="">
                        <Image
                          src={review.src}
                          alt="bg hero"
                          width={200}
                          height={200}
                          className="object-cover h-auto w-full rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 max-w-xs mx-auto">
                      <div className="text-left mb-10 w-full text-white">
                        {review.message}
                      </div>
                      <div className="w-5/11"><Separator className="bg-white opacity-50" /></div>
                      
                      <div className="flex flex-col text-sm">
                        <span className="text-white text-lg font-semibold">
                          {review.name}
                        </span>
                        <span className="text-white text-base font-light">
                          {review.role}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Section7;
