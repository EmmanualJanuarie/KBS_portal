/**
 * Determines stars based on rating given
 * 
 * @function rating
 * @param {string} rate - the rated value the user submits
 * @example 
 * // rating("2")
 * / gives image of two stars
 */

import { ICONS } from "./icons";

export default function rating(rate: string){
    switch (rate) {
        case "1":
            return(
                <picture>
                    <img src={ICONS.ONE_STAR_ICON} alt="one star rating icon" className="rating-size"/>
                </picture>
            );

        case "2":
            return(
                <picture>
                    <img src={ICONS.TWO_STAR_ICON} alt="two star rating icon" className="rating-size"/>
                </picture>
            );
 
        case "3":
            return(
                <picture>
                    <img src={ICONS.THREE_STAR_ICON} alt="three star rating icon" className="rating-size"/>
                </picture>
            );
   
        case "4":
            return(
                <picture >
                    <img src={ICONS.FOUR_STAR_ICON} alt="four star rating icon" className="rating-size"/>
                </picture>
            );
        
        case "5":
            return(
                <picture>
                    <img src={ICONS.FIVE_STAR_ICON} alt="five star rating icon" className="rating-size"/>
                </picture> 
            );    
    
        default:
            return(
            <picture>
                <img src={ICONS.NO_STAR_ICON} alt="no star rating icon" className="rating-size"/>
            </picture>
            );
    }
}