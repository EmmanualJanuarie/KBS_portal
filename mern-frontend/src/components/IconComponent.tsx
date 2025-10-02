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
    setLink: string
}
export default function IconComponent({defaultSRC, setClassName, onHoverSRC, setLink}: iconComponentProps){
    const [icon, setIcon] = useState(defaultSRC);

    return (
        <div className="shrink-0">
            <picture>
                <a href={setLink}>
                    <img src={icon} alt="Icon" className={setClassName} 
                    onMouseEnter={()=> setIcon(onHoverSRC)}
                    onMouseLeave={()=> setIcon(defaultSRC)}
                    />
                </a>
            </picture>
        </div>
        
    );

}