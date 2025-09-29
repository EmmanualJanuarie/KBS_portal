    /**
     * Houses the tailwind setup for the Couse list for the Desktop and laptop design
     * 
     * @function CourseModal
     * @returns Tailwind layout for course list
     */

    import CourseCardComponent from "../CourseCardComponent";

    // Object for the courses description
    const courses = {
        customerService:{
            img: "/src/assets/images/KBS_Logo.jpg",
            category: "Corporate",
            heading: "Customer Service",
            des: {
                heading: "Build a Professional Image with Exceptional Customer Service Skills",
                subHeading: "Learn how to communicate with confidence, handle challenges, with ease, and create experiences that keep customers coming back."
            }
        },

        financialLiteracy:{
            img: "image here",
            category: "Corporate",
            heading: "Financial Literacy",
            des: {
                    heading: "Master your money with Essential Financial Literacy Skills.",
                    subHeading: "Gain the knowledge to budget smart, maange debt, and build long-term wealth with confidence."
            }
        },
        interviewPreparation:{
            img: "image here",
            category: "Work Shop",
            heading: "Interview Preparation",
            des: {
                    heading: "Interview Preparation Workshop: Master Confidence and Communication",
                    subHeading: "Practice real interview scenarios, sharpen your responses, and build the confidence to impress any employer."
            } 
        },
        workplaceEtiquette:{
            img: "image here",
            category: "Work Shop",
            heading: "Workplace Etiquette",
            des: {
                    heading: "Master Professional Etiquette for a Respectful and Thriving Workplace",
                    subHeading: "Learn essential workplace behaviors, communication styles, and professional practices that foster respect, teamwork, and career growth."
            } 
        }
    }

    type courseModalProps ={
        setClassName: string
        isOpen: boolean
    }
    export default function CourseModal({setClassName,isOpen}: courseModalProps){

        return(
            <div className={`transform transition-all duration-500 ease-in-out
                            ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
                <div className="flex w-full py-2 px-2 gap-12 justify-center">
                    <div className="hover:text-yellow-500 course-header text-3xl">
                        The Courses and Workshops we offer.
                    </div>
                </div>

                <div className="flex w-full py-2 px-2 gap-12 justify-center">
                    <CourseCardComponent setCategory={courses.customerService.category}
                                         setSRC={courses.customerService.img}
                                         setCourseTitle={courses.customerService.heading} 
                                         setHeading={courses.customerService.des.heading}   
                                         setSubHeading={courses.customerService.des.subHeading}
                    />
                </div>
            </div>
        );

    }