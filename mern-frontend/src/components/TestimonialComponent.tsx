import TestimonialCards from "./TestimonialCards";

/**
 * Diplays the layout of the Testimonials
 * @returns tsx script that renders the layout.
 */ 
export default function TestimonialsComponent(){

    return(
         <div className="w-full px-5 py-10">
            <h1 className="text-white font-bold text-center text-6xl px-2 py-8">
                <span className="heading-background-effect-1 px-5 py-5">Our Client Feedback</span>
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center py-20">
                {/* COLUMN */}
                <div className="w-full flex justify-center">
                    {/* CARD WRAPPER */}
                    <div className="bg-white/95 shadow-lg rounded-2xl p-6 text-center md:text-left mx-auto w-4/5">
                        <TestimonialCards />
                    </div>   
                </div>
            </div>
        </div>
    );
}