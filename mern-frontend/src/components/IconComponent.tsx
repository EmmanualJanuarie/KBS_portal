/**
 * Displays an icon
 * @funtion IconComponent
 * @returns tsx layout for the Icon Component
 */

import { useState } from "react";

type iconComponentProps ={
    defaultSRC: string,
    setClassName: string,
    onHoverSRC: string
    link?: string; //optional link
    isLinkActive?: boolean;
}
 
export default function IconComponent({defaultSRC, setClassName, onHoverSRC,  link, isLinkActive}: iconComponentProps){
    const [icon, setIcon] = useState(defaultSRC);

    const imgElement = (
        <img
            src={icon}
            alt="Icon"
            className={setClassName}
            onMouseEnter={() => setIcon(onHoverSRC)}
            onMouseLeave={() => setIcon(defaultSRC)}
        />
    );

    return (
        <div className="shrink-0">
            {isLinkActive && link ? (
                <picture>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                    {imgElement}
                </a>
                </picture>
            ) : (
                imgElement
            )}
        </div>
        
    );

}