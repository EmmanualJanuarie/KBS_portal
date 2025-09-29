import NavbarComponent from "../src/components/NavbarComponent";
import HeroComponent from "../src/components/HeroComponent";
import HamburgerMenuComponent from "../src/components/HamburgerMenuComponent";
import HamburgerNavItemsModal from "../src/components/modals/HamburgerNavItemsModal";
import { useState } from "react";
import CourseModal from "../src/components/modals/CourseModal";
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
            <div className="navbar">
                <div className="hidden md:flex">
                    <NavbarComponent toggleList={toggleList} setToggleList={setToggleList}/>
                </div>

                <div className="flex md:hidden">
                    <HamburgerMenuComponent toggle={toggle} setToggle={setToggle} />
                </div>

                {/* Show the modal when toggle is true */}
                <div className="navItemModal">
                    {toggle && <HamburgerNavItemsModal setClassName="w-full px-4 py-4 flex md:hidden"/>}
                </div>

                <div className="courseModal">
                    {toggleList && <CourseModal setClassName={"sads"} isOpen />}
                </div>
            </div>

            
            
            
            
            <div className="hero">
                <HeroComponent/>
            </div>
        </>
    );

}