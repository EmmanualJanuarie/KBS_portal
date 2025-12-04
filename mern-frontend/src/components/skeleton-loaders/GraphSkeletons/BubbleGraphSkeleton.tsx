export default function BubbleChartSkeleton() {
  return (
    <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-6 w-[23rem] md:w-[23rem] lg:w-100 xl:w-100 max-w-3xl">
      {/* Centered Heading */}
      <div className="flex justify-center mb-6">
        <div className="h-6 w-1/2 sm:w-1/3 rounded-md 
          bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)] 
          bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]" />
      </div>

      {/* Bubble chart area */}
      <div className="relative w-full h-72 bg-gray-50 rounded-md border border-gray-100 overflow-hidden">
        {Array.from({ length: 9 }).map((_, i) => {
          const size = 20 + Math.random() * 60; // varied bubble sizes
          const top = 5 + Math.random() * 85;   // avoid touching edges
          const left = 5 + Math.random() * 90;  // avoid touching edges
          return (
            <div
              key={i}
              className="absolute rounded-full 
                bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)] 
                bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                top: `${top}%`,
                left: `${left}%`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
