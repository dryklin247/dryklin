"use client"
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "./ui/separator";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const Section6 = () => {
  const reviews = [
    {
      name: "Dekunle",
      date: "01-06-2025",
      message:
        "“DryKlin Laundry services have truly make my life easier, more time for family!”",
      src: "/reviewer2.png",
    },
    {
      name: "Aisha",
      date: "01-06-2025",
      message:
        "“DryKlin makes laundry day a breeze with their excellent service & customer support.”",
      src: "/reviewer1.png",
    },
    {
      name: "Dekunle",
      date: "01-06-2025",
      message:
        "“DryKlin Laundry services have truly make my life easier, more time for family!”",
      src: "/reviewer2.png",
    },
    {
      name: "Aisha",
      date: "01-06-2025",
      message:
        "“DryKlin makes laundry day a breeze with their excellent service & customer support.”",
      src: "/reviewer1.png",
    },
    {
      name: "Dekunle",
      date: "01-06-2025",
      message:
        "“DryKlin Laundry services have truly make my life easier, more time for family!”",
      src: "/reviewer2.png",
    },
    {
      name: "Aisha",
      date: "01-06-2025",
      message:
        "“DryKlin makes laundry day a breeze with their excellent service & customer support.”",
      src: "/reviewer1.png",
    },
  ];  

  return (
    <section className="px-4 pb-12 bg-white">
      <div className="hidden md:block container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-3">Testimonials</h2>
        <p className="text-center text-[#131313] mb-20">
          Check out what our customers are saying about us
        </p>
      </div>

      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-full mx-auto hidden md:block"
      >
        <div className="hidden md:block">
          <CarouselPrevious className="bg-[#FFF6F2] text-[#131313] border border-[#C1C1C1]" />
          <CarouselNext className="bg-[#FFF6F2] text-[#131313] border border-[#C1C1C1]" />
        </div>
        <CarouselContent className="-ml-1">
          {reviews.map((review, index) => (
            <CarouselItem
              key={index}
              className="pl-1 ml-10 md:basis-1/3 lg:basis-1/3"
            >
              <div className="p-1">
                <Card className="p-0 rounded-md border border-[#C1C1C1] shadow-md">
                  <CardContent className="flex items-center justify-center p-3 gap-5">
                    <div className="aspect-square bg-orange-200 rounded-md">
                      <Image
                        src={review.src}
                        alt="bg hero"
                        width={200}
                        height={200}
                        className="object-cover h-auto w-auto rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-black">{review.name}</span>
                        <span className="text-[#546A6A]">{review.date}</span>
                      </div>

                      <Separator className="bg-[#C1C1C1] px-2" />

                      <div className="text-center px-4 text-[#0A030F]">
                        {review.message}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Section6;
