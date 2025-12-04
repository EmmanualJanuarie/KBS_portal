export default function BarGraphSkeleton() {
  return (
    <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-6 w-[23rem] md:w-[23rem] lg:w-100 xl:w-100 max-w-3xl">
      {/* Centered Heading */}
      <div className="flex justify-center mb-6">
        <div className="h-6 w-1/2 sm:w-1/3 rounded-md bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)] bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]" />
      </div>

      {/* Bar chart area */}
      <div className="relative w-full h-64 flex items-end space-x-4">
        {/* Simulated bars */}
        {Array.from({ length: 6 }).map((_, i) => {
          const heightPercent = 20 + Math.random() * 60; // random height for shimmer
          return (
            <div
              key={i}
              className="flex-1 bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)] bg-[length:200%_100%] animate-[shimmer_1.6s_infinite] rounded-t-md"
              style={{ height: `${heightPercent}%` }}
            />
          );
        })}
      </div>

      {/* X-axis labels placeholder */}
      <div className="flex justify-between mt-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-3 w-8 bg-gray-200 rounded-md"
          />
        ))}
      </div>
    </div>
  );
}
