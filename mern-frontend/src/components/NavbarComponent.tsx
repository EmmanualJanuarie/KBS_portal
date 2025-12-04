import ButtonComponent from "./ButtonComponent"
import LogoComponent from "./LogoComponent"
import { ROUTES } from "../../utils/routes";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MATERIALS } from "../../utils/materials";

/**
 * Contains the set tailwind layout structure for the navbar.
 * 
 * @function NavbarComponent
 * @returns Tailwind layout for navbar 
 */

type navbarProps = {
    toggleList : boolean,
    setToggleList: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavbarComponent({toggleList, setToggleList}: navbarProps){

    const navitems = [
        {   class: "text-gray text-hover-gold nav-item", name: "Home", scrollTo: "/", isHome: true, normalNavs: FUNC_NAVITEMS},
        {   class: `nav-item ${toggleList ? "active-nav-item" : "text-gray"} text-hover-gold`, name: "Courses", scrollTo: "", isHome: false, eventclick: FUNC_COURSES},
        {   class: "text-gray text-hover-gold nav-item", name: "Guide", scrollTo: "guide", isHome: false, normalNavs: FUNC_NAVITEMS},
        {   class: "text-gray text-hover-gold nav-item", name: "Testimonials", scrollTo: "testimonials", isHome: false, normalNavs: FUNC_NAVITEMS},
        {   class: "text-gray text-hover-gold nav-item", name: "FAQs", scrollTo: "faqs", isHome: false, normalNavs: FUNC_NAVITEMS },
    ]

    const [naviItem, setNavItem] = useState<number | null>(null);
    const [scrolling, setScrolling] = useState(false);

    const scrollToSection = (id:string) =>{
        const section = document.getElementById(id);
        if(section){
            section.scrollIntoView( {behavior: "smooth"} );
        }
    };

    const toggle = (index: number) =>{
        setNavItem(naviItem == index ? null: index);
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
    }

     // Handle scroll logic for navItems
        useEffect(()=>{
            const handleScroll = ()=>{
                setScrolling(true);
            };

            window.addEventListener("scroll", handleScroll)

            return()=>{
                window.removeEventListener("scroll", handleScroll)
            }
        }, []);

        // Update active navItem based on scroll
        useEffect(()=>{
            if (!scrolling) return;

            const sections = navitems.map((item) => document.getElementById(item.scrollTo));

            let activeIndex = null;

            // First check if we are at the top of the page and on "Home"
            if (window.scrollY === 0) {
                activeIndex = 0; // Home section
            } else {
                for (let i = 0; i < sections.length; i++) {
                    const section = sections[i];
                    if (section) {
                    const rect = section.getBoundingClientRect();

                    // Check if the section is in the viewport
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
                        activeIndex = i;
                        break;
                    }
                    }
                }
            }
            setNavItem(activeIndex);
            setScrolling(false);
        }, [scrolling]);



    return(
       <div className="w-full px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between">

            {/* LEFT SIDE */}
            <div className="flex items-center gap-8 w-full md:flex-1">
            {/* Logo */}
            <div className="shrink-0">
                <LogoComponent setSRC={"/" + MATERIALS.LOGOS.KBS} setClassName="logo-size" />
            </div>

            {/* Nav Items */}
            <div className="md:flex md:flex-row gap-2">
                {navitems.map((navitems, index) =>(
                    <div key={index} className={`${naviItem === index? "color-gold": "text-gray"} ${navitems.class}`} onClick={()=>
                        {
                            if(navitems.eventclick){
                                navitems.eventclick()
                            }else if(navitems.normalNavs){
                                navitems.normalNavs(index, navitems.scrollTo, navitems.isHome);
                            }

                            
                        }
                    }>
                        {navitems.name}
                    
                    </div>
                ))}

                
            </div> 
            </div>

            

            {/* RIGHT SIDE */}
            <div className="flex flex-row gap-4 justify-end">
                <ButtonComponent name="Admin console" setClassName="btn-type-1" setOnClick={()=>{
                    setTimeout(()=>{
                         window.open(ROUTES.ADMIN_PAGE, '_blank');
                    }, 800)
                }}/>
                <ButtonComponent name="Contact Support" setClassName="btn-type-2" setOnClick={() => {
                    setTimeout(()=>{
                        window.open(ROUTES.CONTACT_STAFF_PAFE, '_blank')
                    }, 800)
                }}/>
                <ButtonComponent name="SignIn" setClassName="btn-type-3 btn-w-150" setOnClick={() => {
                    setTimeout(()=>{
                        window.open(ROUTES.USER_PAGE, '_blank')
                    }, 800)
                }} />
            </div>

        </div>
       </div>
    )
}