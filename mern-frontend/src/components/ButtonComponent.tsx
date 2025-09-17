type buttonComponentProps ={
    name: string,
    setClassName: string
}

/**
 * Creates the Button 
 * 
 * @function ButtonComponent
 * @param {string} name - The name of the button
 * @param {string} setClassName - the class attribute
 * @returns TSX script that's renders and creates the Button
 */

export default function ButtonComponent({name, setClassName}: buttonComponentProps){
    return(
        <>
            <form>
                <input type="button" value={name} className={setClassName}/>
            </form>
        </>
    );

}