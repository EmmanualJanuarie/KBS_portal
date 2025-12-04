/**
 * diplays the logo skeleton
 * @function LogoLoader
 * 
 * @returns tsx script to display the logoSkeleton Loader
 */

type logoLoaderProps = {
    width: string;
    height: string;
}
export default function LogoLoader({width, height}: logoLoaderProps){
    return(
        <>
           <div className="p-4 max-w-sm w-full mx-auto">
                <div className="flex space-x-4">
                    <div className={`rounded-full h-${height} w-${width} bg-shimmer bg-[length:200%_100%] animate-shimmer`}></div>
                </div>
            </div>
        </>
    );
}