    /**
     * Houses the tailwind setup for the Client Testimonial Card for the Desktop and laptop design
     * 
     * @function TestimonialCards
     * @returns Tailwind layout for testimonial cards
     */

    import { Swiper, SwiperSlide } from "swiper/react";
    import { Autoplay, Navigation } from "swiper/modules";
    import { MATERIALS } from "../../utils/materials";
    import 'swiper/css'
    import 'swiper/css/navigation'
    import rating from "../../utils/rating"

interface Client {
    fullname: string, feedback: string, rating: string
}

    // Object for the courses description
    // FIX: Temporary, please change with MongoDB Fetch API
    const clients: Client[]= [
        { fullname: "John Doe", 
          feedback: "Sample testimonial copy shown to demonstrate the feedback carousel layout.",
          rating: "4",  
        },
        { fullname: "Jane Doe", 
          feedback: "Placeholder feedback for the portfolio demo. No client testimonial is represented here.",
          rating: "5",  
        }
    ] 

    export default function TestimonialCards(){

        return(
            <div className={`transform transition-all duration-500 ease-in-out`}>
                <div className="flex w-full gap-12 justify-center">
                    <div className="hover:text-yellow-500 course-header text-3xl ">
                        <picture>
                            <img src={MATERIALS.ICONS.QUOTATION_MARK_ICON} alt="quote icon image" className="w-16"/>
                        </picture>
                    </div>
                </div>

                <div className="flex w-full p-10 gap-12 justify-center items-center">
                    <Swiper
                        loop={true}
                        centeredSlides={true}
                        speed={1200}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        breakpoints={{
                            320: {
                            slidesPerView: 1,
                            spaceBetween: 12,
                            },
                            640: {
                            slidesPerView: 1,
                            spaceBetween: 16,
                            },
                            768: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            },
                            800: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            },
                            1024: {
                            slidesPerView: 1, // ✅ show 4 on laptop/desktop
                            spaceBetween: 24,
                            },
                            1500: {
                            slidesPerView: 1, // 
                            spaceBetween: 24,
                            },
                        }}
                        className="w-full"
                        >
                            {clients.map((client, index) =>(
                                <SwiperSlide 
                                  key={index}
                                  className="flex flex-col justify-center items-center p-6 text-center"
                                >
                                    <div className="overflow-hidden text-ellipsis line-clamp-6 text-lg text-black">
                                        {client.feedback}
                                    </div>

                                    <div className="flex justify-center">
                                        {rating(client.rating)}
                                    </div>

                                    <div className="text-xl font-semibold text-gray-800">
                                        {client.fullname}
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                    
                </div>
            </div>
        );

    }
