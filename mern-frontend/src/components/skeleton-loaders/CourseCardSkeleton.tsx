export default function CourseCardSkeleton() {
  return (
    <div className="bg-white shadow-md rounded-2xl overflow-hidden w-full sm:max-w-xs md:max-w-sm lg:max-w-md animate-pulse">
      {/* Image placeholder */}
      <div className="h-48 w-full bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)] 
                      bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]" />

      <div className="p-4 flex flex-col gap-2">
        {/* Title placeholder */}
        <div className="h-6 w-3/4 rounded-md bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)] 
                        bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]" />

        {/* Description placeholders */}
        <div className="h-4 w-full rounded-md bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)] 
                        bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]" />
        <div className="h-4 w-5/6 rounded-md bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)] 
                        bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]" />

        {/* Author placeholder */}
        <div className="h-4 w-1/3 rounded-md bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)] 
                        bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]" />
      </div>
    </div>
  );
}
