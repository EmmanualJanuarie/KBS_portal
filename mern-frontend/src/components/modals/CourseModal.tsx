    /**
     * Houses the tailwind setup for the Couse list for the Desktop and laptop design
     * 
     * @function CourseModal
     * @returns Tailwind layout for course list
     */

    import { Swiper, SwiperSlide } from "swiper/react";
    import { Autoplay, Navigation } from "swiper/modules";
    import 'swiper/css'
    import 'swiper/css/navigation'
    import CourseCardComponent from "../CourseCardComponent";
    import { ASSET_PATH } from "../../../utils/materials";


    // Creates/ assigns datatypes to objects
    interface Course {
        title: string, category: string,
        heading: string, subHeading: string,
        image: string
    }

    // Object for the courses description
    const courses: Course[]= [
        { title: "Customer Service", category: "Corporate", 
          heading: "Build a Professional Image with Strong Customer Service Skills",
          subHeading: "Learn customer-focused communication, problem-solving, and service skills that build trust, loyalty, and lasting relationships.",
          image: ASSET_PATH("stickers/customer_service.png")
        },
        { title: "Financial Literacy", category: "Corporate", 
          heading: "Master your money with Essential Financial Literacy Skills.",
          subHeading: "Gain the knowledge to budget smart, maange debt, and build long-term wealth with confidence.",
          image: ASSET_PATH("stickers/financial_Literacy.png")
        },
        { title: "Interview Preparation", category: "Work Shop", 
          heading: "Workshop: Master Confidence and Communication",
          subHeading: "Practice real interview scenarios, sharpen your responses, and build the confidence to impress any employer.",
          image: ASSET_PATH("stickers/interview_prep.png")
        },
        { title: "Workplace Etiquette", category: "Work Shop", 
          heading: "Master Professional Etiquette for a Respectful and Thriving Workplace",
          subHeading: "Learn key workplace habits, communication skills, and professional practices that build respect, teamwork, and career success.",
          image: ASSET_PATH("stickers/workplace_etiquette.png")
        },
        { title: "CV Drafting", category: "Work Shop", 
          heading: "Hands-On CV Drafting Workshop: Build Your Career-Ready Resume",
          subHeading: "Work step-by-step to create a polished CV that impresses employers and increases your interview opportunities.",
          image: ASSET_PATH("stickers/cv_drafting.png")
        }
    ] 

    type courseModalProps ={
        setClassName: string
        isOpen: boolean
    }
    export default function CourseModal({isOpen}: courseModalProps){

        return(
            <div className={`transform transition-all duration-500 ease-in-out
                            ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                <div className="flex w-full py-2 px-2 gap-12 justify-center">
                    <div className="hover:text-yellow-500 course-header text-3xl">
                        The Courses and Workshops we offer.
                    </div>
                </div>

                <div className="flex w-full py-5 px-5 gap-12 justify-center">
                    <Swiper
                        loop={true}
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
                            slidesPerView: 2,
                            spaceBetween: 10,
                            },
                            800: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                            },
                            1024: {
                            slidesPerView: 3, // ✅ show 4 on laptop/desktop
                            spaceBetween: 24,
                            },
                            1500: {
                            slidesPerView: 4, // ✅ show 4 on laptop/desktop
                            spaceBetween: 24,
                            },
                        }}
                        className="max-w-full"
                        >
                            {courses.map((course, index) =>(
                                <SwiperSlide 
                                  key={index}
                                  className=""
                                >
                                    <CourseCardComponent 
                                        setCourseTitle={course.title} setCategory={course.category}
                                        setHeading={course.heading} setSubHeading={course.subHeading}
                                        setSRC={course.image}
                                    />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                    
                </div>
            </div>
        );

    }
