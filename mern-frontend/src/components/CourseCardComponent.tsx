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
        <div className="flex flex-col card-width px-2 py-2 card-outer-border gap-2">

            <div className="flex flex-wrap">
                {/* Image Goes Here*/}
                    <picture className="card-picture-layout set-to-gray">
                            <img src={setSRC} alt="course content image"/>
                    </picture>
            </div>

            <div className="flex flex-wrap px-5 py-5">
                {/* Category*/}
                <div className="category items-center gap-2 px-2 py-1 card-tag set-to-gray">
                    <span>{setCategory}</span>
                </div>
            </div>

            <div className="flex flex-wrap px-5 py-0">
                {/* Course Title*/}
                <div className="items-center gap-2 text-2xl">
                    <span>{setCourseTitle}</span>
                </div>
            </div>

            <div className="flex flex-wrap px-5 py-0">
                {/* Heading for card */}
                <div>
                    <span className="text-2xl font-semibold" >{setHeading}</span>
                    <span>
                        <p className="font-to-gray">{setSubHeading}</p>
                    </span>
                </div>

                
            </div>
        </div>
    );
}