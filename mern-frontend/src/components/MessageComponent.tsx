type messageComponentProps = {
    setIcon: string,
    setMessage: string
}

export default function MessageComponent({setIcon, setMessage}: messageComponentProps){
    return(
        <>
            <div className="bg-white/95 shadow-lg rounded-2xl p-10 items-center justify-center form-contactstaff">
                <div className="flex flex-row md:flex md:flex-row sm:flex sm:flex-row justify-center lg:gap-7 md:gap-7 sm:gap-20">
                    <div className="shrink-0">
                        <picture>
                            <img className="w-10" src={setIcon} alt="icon"/>
                        </picture>
                    </div>
                    <div className="text-2xl font-bold color-gold text-center">{setMessage}</div>
                </div>
            </div>
        </>
    );
}