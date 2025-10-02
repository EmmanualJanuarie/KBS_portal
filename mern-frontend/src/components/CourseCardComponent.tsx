/**
 * Houses the tailwind scripts to render in the course cards
 * 
 * @function CourseCardComponent
 * @returns TSX script for the course card layout.
 */

    type courseCardProps = {
        setCategory: string,
        setSRC: string
        setHeading: string,
        setSubHeading: string,
        setCourseTitle: string
    }

export default function CourseCardComponent({ setCategory, setHeading, setSubHeading, setCourseTitle, setSRC}: courseCardProps){

    return(
        <div className="flex flex-col card-width max-w-sm mx-auto w-full px-3 py-3 card-outer-border gap-2 hover-to-gold">

            <div className="flex flex-wrap">
                {/* Image Goes Here*/}
                    <picture className="card-picture-layout set-to-gray w-full">
                            <img src={setSRC} alt="course content image" className="rounded-md w-full object-cover"/>
                    </picture>
            </div>

            <div className="px-3 py-2">
                {/* Category*/}
                <div className="category items-center gap-2 px-2 py-1 card-tag set-to-gray text-sm sm:text-base">
                    <span>{setCategory}</span>
                </div>
            </div>

            <div className="flex flex-wrap px-5 py-0">
                {/* Course Title*/}
                <div className="items-center gap-2 text-lg sm:text-xl md:text-2xl font-bold">
                    <span>{setCourseTitle}</span>
                </div>
            </div>

            <div className="flex flex-wrap px-5 py-0">
                {/* Heading for card */}
                <div>
                    <span className="text-base sm:text-lg md:text-xl font-semibold block">{setHeading}</span>
                    <span>
                        <p className="text-sm sm:text-base font-to-gray py-2 leading-snug">{setSubHeading}</p>
                    </span>
                </div>

                
            </div>
        </div>
    );
}