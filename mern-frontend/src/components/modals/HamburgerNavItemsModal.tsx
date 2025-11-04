/**
 * Tailwind layout for the navitem modal
 * 
 * @function HamburgerNavItemsModal
 * @returns returns the TSX Scripts for the nav item modal
 */

import ButtonComponent from "../ButtonComponent";
import { ROUTES } from "../../../utils/routes";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type HamburgerNavItemsModalProps = {
    setClassName: string,
    toggleList: boolean,
    setToggleList: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function HamburgerNavItemsModal({setClassName, toggleList, setToggleList}: HamburgerNavItemsModalProps){

    const mobileNavItems = [
        {   class: "text-gray text-hover-gold nav-item btn-type-1", name: "Home", scrollTo: "/", isHome: true, normalNavs: FUNC_NAVITEMS},
        {   class: `nav-item ${toggleList ? "color-gold btn-type-1" : "text-gray btn-type-1"} text-hover-gold`, name: "Courses", scrollTo: "", isHome: false, eventclick: FUNC_COURSES},
        {   class: "text-gray text-hover-gold nav-item btn-type-1", name: "Guide", scrollTo: "guide", isHome: false, normalNavs: FUNC_NAVITEMS},
        {   class: "text-gray text-hover-gold nav-item btn-type-1", name: "Testimonials", scrollTo: "testimonials", isHome: false, normalNavs: FUNC_NAVITEMS},
        {   class: "text-gray text-hover-gold nav-item btn-type-1", name: "FAQs", scrollTo: "faqs", isHome: false, normalNavs: FUNC_NAVITEMS },
    ]

    const [mobileNaviItem, setMobileNavItem] = useState<number | null>(null);
    const [toggleItems, setToggleItems] = useState(false); // determins the nav Items display state

    const scrollToSection = (id:string) =>{
        const section = document.getElementById(id);
        if(section){
            section.scrollIntoView( {behavior: "smooth"} );
        }
    };

    const toggle = (index: number) =>{
        setMobileNavItem(mobileNaviItem == index ? null: index);
    };

    const navigate = useNavigate();

    const goHome = (navTo:string) =>{
        navigate(navTo);
        window.scrollTo({ top: 0, behavior: "smooth"});
    }

    // Function for courses
    function FUNC_COURSES(){
        setToggleList(prev => !prev);
    }

    // Function for nav items
    function FUNC_NAVITEMS(index: number, scrollTo: string, isHome: boolean ){
        toggle(index);
        scrollToSection(scrollTo);

        if(isHome){
            goHome(scrollTo);
        }

        setToggleItems(false);

        //Refreshes page for 5 seconds
        setTimeout(() => {
            document.body.classList.add("fade-out");
            setTimeout(() => {
                window.location.reload();
            }, 2); // Wait for fade-out to finish before reloading
        }, 900);
    }

    //Function for entire HamburgerList
    function FUNC_HAM_NAVITEM_LIST(){
        return(
            <div className={setClassName}>
            <div className="flex flex-col md:flex-row gap-0 justify-center items-center">
                {/* MOBILE ITEMS*/}
                <div className="flex flex-col items-center justify-center gap-0 w-full md:flex-1">
                   {mobileNavItems.map((mobileItems, index)=>(
                        <div key={index} className={`${mobileNaviItem === index? "color-gold": "text-gray"} ${mobileItems.class}`} onClick={()=>{
                            {
                                if(mobileItems.eventclick){
                                    mobileItems.eventclick()
                                }else if(mobileItems.normalNavs){
                                    mobileItems.normalNavs(index, mobileItems.scrollTo, mobileItems.isHome);
                                    // Toggle the menu closed after clicking a link
                                    setToggleItems(true);
                                }
                            }
                        }}>
                            {mobileItems.name}
                        </div>
                   ))}
                </div>

                {/* BUTTON ITEM 1 */}
                <div className="flex items-center gap-0 w-full md:flex-1 justify-center">
                    <div className="flex md:hidden px-2 py-3 items-center">
                        <ButtonComponent name="Admin console" setClassName="btn-type-2" setOnClick={()=>{
                            setTimeout(()=>{
                                window.open(ROUTES.ADMIN_PAGE, '_blank');
                            }, 800)
                }} />
                    </div>
                </div>
                {/* BUTTON ITEM 2 */}
                <div className="flex items-center gap-0 w-full md:flex-1 justify-center">
                    <div className="flex md:hidden px-2 py-3 items-center">
                        <ButtonComponent name="Contact Support" setClassName="btn-type-2" setOnClick={()=>{
                            setTimeout(()=>{
                                window.open(ROUTES.CONTACT_STAFF_PAFE, '_blank');
                            }, 800)
                        }} />
                    </div>
                </div>
                {/* BUTTON ITEM 3 */}
                <div className="flex items-center gap-0 w-full md:flex-1 justify-center">
                    <div className="flex md:hidden px-2 py-3 items-center">
                        <ButtonComponent name="SignIn" setClassName="btn-type-3 btn-w-150"setOnClick={()=>{
                            setTimeout(()=>{
                                window.open(ROUTES.USER_PAGE, '_blank');
                            }, 800)
                        }}/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
    return(
        <>
            {!toggleItems? 
                <>
                    {FUNC_HAM_NAVITEM_LIST()}
                </>
                :
                null
            }
        </>
    );
}