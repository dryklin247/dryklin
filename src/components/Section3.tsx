import { CreditCard, Headset, Route } from "lucide-react";
import React from "react";

const Section3 = () => {

    const cardItems = [
        {
            icon: Route,
            title: "Order Tracking",
            description: "Stay in the loop with real-time updates on your laundry's progress, from pickup to delivery right on the mobile app."
        },
        {
            icon: CreditCard,
            title: "Secure Payment",
            description: "Pay with confidence knowing your transactions are securely processed, protecting your financial information every step of the way."
        },
        {
            icon: Headset,
            title: "24/7 Customer Support",
            description: "We're here for you around the clock, ready to assist with any questions or concerns, ensuring a seamless experience."
        },
    ]

  return (
    <section className="py-10 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-3">
            Enjoy Exclusive Benefits
        </h2>
        <p className="text-center text-[#131313] mb-7">
            Experience effortless laundry management and exceptional service, saving you time and hassle.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto p-6">
      {cardItems.map((item, index) => {
        const Icon = item.icon
        return (
          <div key={index} className="flex flex-col items-start gap-3 text-black p-5 shadow-lg rounded-lg bg-white">
            <div className="p-4 bg-white">
              <Icon className="w-8 h-8 text-[#E86317]" />
            </div>
            <h4 className="font-semibold text-xl">{item.title}</h4>
            <p className="text-base">{item.description}</p>
          </div>
        )
      })}
    </div>
    </section>
  );
};

export default Section3;
