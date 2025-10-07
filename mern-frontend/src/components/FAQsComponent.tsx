/**
 * Displays the layout of the FAQs section
 * 
 * @function FAQsComponent
 * @returns the tsx script to render the FAQs sections
 */

import { useState } from "react";

export default function FAQsComponent(){

      const faqs = [
        {question: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur?", answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
        {question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor aliqua? ", answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque."},
        {question: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?", answer: "ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia."}
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