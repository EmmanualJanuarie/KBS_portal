import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css'
/**
 * creates the vertical carousel
 * 
 * @function VerticalCarouselComponent
 * @returns TSX scripot that renders the vertical carousel 
 */

type verticalCarouselProps = {
    setClassName: string
    reverseDirection?: boolean
}
// Creates / assigns the datatypes of the object slides
interface Slide  {
    metric: string;
    content: string;
}

// Contains various matrics (objects), stored in an array
const slides: Slide[] = [
    { metric: "500+", content: "Entrepreneurs Trained"},
    { metric: "120",  content: "Corporate Teams Upskilled"},
    { metric: "85%",  content: "Course Completion Rate"},
    { metric: "300",  content: "Scheduled Workshops"},
    { metric: "95%",  content: "Positive Feedback Rate"},
    { metric: "50+",  content: "Industry Course Availability"},
    { metric: "10k+", content: "Learners Registered"},
    { metric: "85%",  content: "Course Completion Rate"}
];


export default function VerticalCarouselComponent({setClassName, reverseDirection = false}: verticalCarouselProps){
    return(
        <Swiper
  loop={true}
  autoplay={{
    delay: 2000,
    disableOnInteraction: true,
    reverseDirection
  }}
  modules={[Autoplay]}
  breakpoints={{
    320: {
      direction: "horizontal", // horizontal on small devices
      slidesPerView: 1,
      spaceBetween: 16, // gap between cards
    },
    640: {
      direction: "horizontal",
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      direction: "vertical", // vertical on tablets and up
      slidesPerView: 1,
      spaceBetween: 16,
    },
    1024: {
      direction: "vertical",
      slidesPerView: 4,
      spaceBetween: 20,
    },
  }}
  className={`${setClassName} max-w-md md:max-w-full`}
>
  {slides.map((slide, index) => (
    <SwiperSlide id="slider"
      key={index}
      className="flex flex-col items-center justify-center 
                 bg-gray-100 rounded-lg p-6 
                 max-w-[260px] w-full mx-auto"
    >
      <p className="metric text-yellow-600">{slide.metric}</p>
      <p className="content">{slide.content}</p>
    </SwiperSlide>
  ))}
</Swiper>


    );
}