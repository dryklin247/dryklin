import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Separator } from "./ui/separator"
  
const Section4 = () => {
    const faqs = [
        {
            question: "How does DryKlin work?",
            answer: "DryKlin simplifies laundry care. Just schedule a pickup via the app, and our professionals handle the rest, returning your laundry fresh and clean."
        },
        {
            question: "What areas do you serve?",
            answer: "We currently operate in Ibadan, Oyo State. Check our app for availability in your area!"
        },
        {
            question: "How do I schedule a pickup?",
            answer: "Scheduling is easy! Simply open the app, choose a convenient pickup time, and select your desired laundry services."
        },
        {
            question: "What types of laundry services do you offer?",
            answer: "We offer wash and fold, ironing, dry cleaning, and specialty item cleaning. From everyday wear to delicate fabrics, we've got you covered."
        },
        {
            question: "How do I pay for my laundry service?",
            answer: "Payment is hassle-free through the app. Securely pay using your preferred method, whether it's credit/debit card or mobile wallet."
        },
        {
            question: "What if I have special instructions for my laundry?",
            answer: "You can include any special instructions when scheduling your pickup. Our team will ensure your requests are accommodated."
        },
        {
            question: "How can I contact DryKlin for support?",
            answer: "If you have any questions, concerns, or feedback, our customer support team is here to help. You can reach us through the app, via email at chat@dryklin.com or call +234 811 433 2770."
        },
    ]

  return (
    <section className="-mt-10 md:mt-0 py-3 mb-10 md:mb-0 md:py-5 md:px-4 bg-white">
      <div className="w-full container mx-auto">
        <h2 className="text-2xl md:text-4xl text-[#E86317] md:text-[#131313] font-bold text-center mb-3">
            FAQs
        </h2>
        <p className="text-center text-[#131313] md:mb-4">
            Feeling unsure? Get the answers to your burning questions
        </p>
      </div>
      <div className="w-full max-w-5xl bg-[#FFFBF9] rounded-lg mx-auto p-5">
        {faqs.map((item, index)=>(
            <Accordion key={index} type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-sm md:text-base">{item.question}</AccordionTrigger>
              <AccordionContent className="text-sm md:text-base">
                {item.answer}
              </AccordionContent>
              <Separator className="bg-[#E1E1E180]"/>
            </AccordionItem>
          </Accordion>          
        ))}
      </div>
    </section>
  )
}

export default Section4