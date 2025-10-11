"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import { faqData } from "@/data/faq";

export default function FaqSection() {
  return (
    <section className="bg-white w-full py-20 px-6 flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        FAQ
      </h2>

      <div className="w-full max-w-5xl">
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-100 rounded-xl mb-4 shadow-sm"
            >
              <AccordionTrigger className="text-lg font-medium px-6 py-4 text-gray-800 cursor-pointer hover:no-underline">
                {item.question}
              </AccordionTrigger>

              <AccordionContent className="px-6 pb-4 mt-2 text-gray-600 text-base leading-relaxed">
                {Array.isArray(item.answer) ? (
                  <ul className="list-disc pl-6 space-y-2">
                    {item.answer.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  item.answer
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
