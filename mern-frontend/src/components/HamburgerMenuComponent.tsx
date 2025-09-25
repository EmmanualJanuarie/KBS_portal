/**
 * Contains the hamburger menu layout.
 * 
 * @function HamburgerMenuComponent
 * @returns tsx script for the hamburger layout
 */

import HamburgerIconComponent from "./HamburgerIcon";
import LogoComponent from "./LogoComponent";

type HamburgerMenuComponentProps = {
    toggle: boolean,
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HamburgerMenuComponent({toggle, setToggle}: HamburgerMenuComponentProps){

    return(
        <>
            <div className="w-full px-4 py-4">
                <div className=" flex flex-col md:flex-row gap-40 items-center justify-between">

                    {/* LEFT SIDE */}
                    <div className="flex items-center gap-20 w-full md:flex-1">
                        {/* LOGO */}
                        <div className="shrink-0">
                            <LogoComponent setSRC="/src/assets/images/KBS_Logo.jpg" setClassName="logo-size" />
                        </div>

                        {/* HAMBURGER ICON */}
                        <div className="shrink-0">
                            <HamburgerIconComponent  setClassName="hamburger" toggle={toggle} setToggle={setToggle} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}