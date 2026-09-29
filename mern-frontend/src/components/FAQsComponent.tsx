/**
 * Displays the layout of the FAQs section
 * 
 * @function FAQsComponent
 * @returns the tsx script to render the FAQs sections
 */

import { useState } from "react";

export default function FAQsComponent(){

      const faqs = [
        {question: "Who is the portal designed for?", answer: "The concept supports entrepreneurs, employees, and program beneficiaries who need access to courses and workshops."},
        {question: "How does course access work?", answer: "An organization or program can assign courses and set an access period for each learner."},
        {question: "Can I track course progress?", answer: "The demo shows sample course progress, assessments, and learning metrics. Live accounts and saved progress require a connected backend."}
    ]

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) =>{
        setOpenIndex(openIndex === index ? null: index);
    };

    
    return(
        <div>
            <div className="w-full px-5 py-60">
                <h1 className="text-white font-bold text-center text-5xl md:text-6xl py-8">
                    <span className="heading-background-effect-1 px-5 py-3">
                    Find the answers that you need.
                    </span>
                </h1>

                <div className="max-w-6xl mx-auto p-10">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-300">
                        <button
                            onClick={() => toggle(index)}
                            className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
                        >
                            <span className="font-medium text-gray-800">{faq.question}</span>
                            <span className="text-xl font-bold">{openIndex === index ? "-" : "+"}</span>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 py-2" : "max-h-0"}`}>
                            <p className="text-gray-600">{faq.answer}</p>
                        </div>
                        </div>
                    ))}
                </div>
            
            </div>
        </div>
    );
}
