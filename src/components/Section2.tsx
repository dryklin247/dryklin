import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Section2 = () => {
    const cardItems = [
        {
            title: "Order Tracking",
            description: "Stay in the loop with real-time updates on your laundry's progress, from pickup to delivery right on the mobile app."
        },
        {
            title: "Secure Payment",
            description: "Pay with confidence knowing your transactions are securely processed, protecting your financial information every step of the way."
        },
        {
            title: "24/7 Customer Support",
            description: "We're here for you around the clock, ready to assist with any questions or concerns, ensuring a seamless experience."
        },
    ]


  return (
    <section className="py-10 md:px-4 bg-white">
      <div className="hidden md:block container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-3">
          Ready for Hassle-Free Laundry?
        </h2>
        <p className="text-center text-[#131313] mb-12">
          Order now and wait for our pickup personnel to come get your laundry.
        </p>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          <Link href={'https://play.google.com/'} target="_blank" className="md:w-1/2">
            <Image
              alt="card 1"
              src={"/content.png"}
              width={579}
              height={609}
              quality={90}
              priority={true}
              className="w-auto h-auto object-cover"
            />
          </Link>
          <div className="md:w-1/2">
            <Image
              alt="card 2"
              src={"/content2.png"}
              width={579}
              height={609}
              quality={90}
              priority={true}
              className="w-auto h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:hidden items-center justify-center bg-[#E86317] py-12 -mt-16">
        <div className="flex flex-col items-center justify-center gap-2 text-white">
            <h2 className="text-3xl font-bold text-center mb-3">
                Enjoy Exclusive Benefits
            </h2>
            <p className="text-center mb-5">
            Experience effortless laundry management and exceptional service, saving you time and hassle.
            </p>
        </div>
        <div className="">
            {cardItems.map((item, index)=>(
                <div key={index} className="flex flex-col items-start gap-2 text-white p-4">
                    <div className="p-4 bg-white rounded-lg">
                        <Clock className="w-6 h-6 text-[#E86317]"/>
                    </div>
                    <h4 className="font-semibold text-xl">{item.title}</h4>
                    <p className="text-base">{item.description}</p>
                </div>
            ))}
        </div>
    </div>
    </section>
  );
};

export default Section2;
