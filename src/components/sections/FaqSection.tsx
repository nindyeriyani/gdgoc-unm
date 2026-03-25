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
    <section className="bg-[#F9FAFC] w-full py-20 px-6 flex flex-col items-center justify-center min-h-[60vh]">
      <div className="w-full max-w-6xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
          FAQ
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Pertanyaan yang sering diajukan mengenai GDGoC UNM. Temukan jawaban
          atas rasa penasaranmu di sini.
        </p>
      </div>

      <div className="w-full max-w-5xl">
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="mb-4 border-none"
            >
              <AccordionTrigger className="bg-white border border-gray-100 rounded-xl px-6 py-5 text-base md:text-lg font-semibold text-gray-900 cursor-pointer hover:no-underline hover:text-[#FF8D28] transition-all shadow-sm">
                {item.question}
              </AccordionTrigger>
 
              <AccordionContent className="mt-2 text-gray-600 text-base leading-relaxed">
                <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm faq-answer-card">
                  {Array.isArray(item.answer) ? (
                    <ul className="list-disc pl-6 space-y-2">
                      {item.answer.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    item.answer
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
