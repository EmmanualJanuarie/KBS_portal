import NavbarComponent from "../src/components/NavbarComponent";
import HeroComponent from "../src/components/HeroComponent";
import HamburgerMenuComponent from "../src/components/HamburgerMenuComponent";
import HamburgerNavItemsModal from "../src/components/modals/HamburgerNavItemsModal";
import { useState } from "react";
import CourseModal from "../src/components/modals/CourseModal";
import AboutUsComponent from "../src/components/AboutUsComponent";
import DividerComponent from "../src/components/DividerComponent";
import TestimonialsComponent from "../src/components/TestimonialComponent";
/**
 * Fabricates the landing page and it's features 
 * @function LandingPage
 * @exports LandingPage
 */

export default function LandingPage(){
    const [toggle, setToggle] = useState(false); //for Hamburger
    const [toggleList, setToggleList] = useState(false); //for Course Modal

    return(
        <>
            {/* NAVIGATION SECTION */}
            <div className="navbar">
                <div className="hidden md:flex">
                    <NavbarComponent toggleList={toggleList} setToggleList={setToggleList}/>
                </div>

                <div className="flex md:hidden">
                    <HamburgerMenuComponent toggle={toggle} setToggle={setToggle} />
                </div>

                {/* Show the modal when toggle is true */}
                <div className="navItemModal">
                    {toggle && <HamburgerNavItemsModal setToggleList={setToggleList} toggleList={toggleList} setClassName="w-full px-4 py-4 flex md:hidden"/>}
                </div>

                <div className="courseModal">
                    {toggleList && <CourseModal setClassName={""} isOpen />}
                </div>
            </div>

            {/* HERO SECTION */}
            <div className="hero">
                <HeroComponent/>
            </div>

            {/* DIVIDER */}
            <div className="divider">
                <DividerComponent />
            </div>

            {/* ABOUT KBS PORTAL SECTION */}
            <div className="aboutus">
                <AboutUsComponent />
            </div>

            {/* DIVIDER */}
            <div className="divider">
                <DividerComponent />
            </div>

            {/* TESTIMONIALS SECTION */}
            <div className="testimonials">
                <TestimonialsComponent />
            </div>

            {/* REPLACE WITH GUIDE SECTION */}
            <div className="aboutus">
                <AboutUsComponent />
            </div>
            {/* DIVIDER */}
            <div className="divider">
                <DividerComponent />
            </div>

            
        </>
    );

}