/**
 * Creates the Hamburger Icon
 * 
 * @function HamburgerIconComponent
 * @param {string} setSRC - The image url of the image
 * @param {string} setClassName - the class attribute
 * @returns TSX script for the logo to be rendered.
 */

import { useEffect, useState } from "react";

// used for the hover effects of the hamburger icons
const hamburgerIcons = {
    grayIcon: "/src/assets/images/hamburger_gray_icon_toggle.png",
    goldIcon: "/src/assets/images/hamburger_gold_icon_toggle.png",
}

// used for effects and close modal icons
const closeIcons = {
    closeGoldIcon: "/src/assets/images/close_gold.png"

}

type hamburgerIconComponentProps ={
    setClassName: string,
    toggle: boolean,
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function HamburgerIconComponent({setClassName, toggle, setToggle}: hamburgerIconComponentProps){
const [icon, setIcon] = useState(hamburgerIcons.grayIcon);

// updates the icon whenever the user toggle changes
useEffect(() =>{
    if(toggle){
        setIcon(closeIcons.closeGoldIcon);
    }else{
        setIcon(hamburgerIcons.grayIcon);
    }
}, [toggle])

    return(
        <>
            <div>
                <picture>
                    <img src={icon} alt="Hamburger Icon" className={`${setClassName} transition-opacity duration-300 ease-in-out hover:scale-110`}
                            onMouseEnter={() => 
                                {if (!toggle) setIcon(hamburgerIcons.goldIcon);} //show close when menu is open
                            } onMouseLeave={() =>
                                {if (!toggle)  setIcon(hamburgerIcons.grayIcon);} //Resets to the hamburger icon
                            }
                            onClick={() => setToggle(!toggle)}
                    />
                </picture>
            </div>
        </>
    );
}