import NavbarComponent from "../src/components/NavbarComponent";
import HeroComponent from "../src/components/HeroComponent";
import HamburgerMenuComponent from "../src/components/HamburgerMenuComponent";
import HamburgerNavItemsModal from "../src/components/modals/HamburgerNavItemsModal";
import { useState } from "react";
/**
 * Fabricates the landing page and it's features 
 * @function LandingPage
 * @exports LandingPage
 */

export default function LandingPage(){
    const [toggle, setToggle] = useState(false);

    return(
        <>
            <div className="navbar">
                <div className="hidden md:flex">
                    <NavbarComponent/>
                </div>

                <div className="flex md:hidden">
                    <HamburgerMenuComponent toggle={toggle} setToggle={setToggle} />
                </div>

                {/* Show the modal when toggle is true */}
                <div className="navItemModal">
                    {toggle && <HamburgerNavItemsModal setClassName="w-full px-4 py-4 flex md:hidden"/>}
                </div>
            </div>

            
            
            <div className="hero">
                <HeroComponent/>
            </div>
        </>
    );

}