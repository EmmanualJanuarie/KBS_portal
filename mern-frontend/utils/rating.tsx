/**
 * Determines stars based on rating given
 * 
 * @function rating
 * @param {string} rate - the rated value the user submits
 * @example 
 * // rating("2")
 * / gives image of two stars
 */

export default function rating(rate: string){
    switch (rate) {
        case "1":
            return(
                <picture>
                    <img src="src/assets/images/icons/one_star_rating_icon.png" alt="one star rating icon" className="rating-size"/>
                </picture>
            );

        case "2":
            return(
                <picture>
                    <img src="src/assets/images/icons/two_star_rating_icon.png" alt="two star rating icon" className="rating-size"/>
                </picture>
            );
 
        case "3":
            return(
                <picture>
                    <img src="src/assets/images/icons/three_star_rating_icon.png" alt="three star rating icon" className="rating-size"/>
                </picture>
            );
   
        case "4":
            return(
                <picture >
                    <img src="src/assets/images/icons/four_star_rating_icon.png" alt="four star rating icon" className="rating-size"/>
                </picture>
            );
        
        case "5":
            return(
                <picture>
                    <img src="src/assets/images/icons/five_star_rating_icon.png" alt="five star rating icon" className="rating-size"/>
                </picture> 
            );    
    
        default:
            return(
            <picture>
                <img src="src/assets/images/icons/no_star_rating_icon.png" alt="no star rating icon" className="rating-size"/>
            </picture>
            );
    }
}