export default function HorizontalBarGraphSkeleton() {
  return (
    <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-6 w-[23rem] md:w-[23rem] lg:w-100 xl:w-100 max-w-3xl">
      {/* Centered Heading */}
      <div className="flex justify-center mb-6">
        <div className="h-6 w-1/2 sm:w-1/3 rounded-md bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)] bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]" />
      </div>

      {/* Horizontal bar chart area */}
      <div className="relative w-full h-[15rem] flex flex-col justify-between space-y-4">
        {Array.from({ length: 6 }).map((_, i) => {
          const widthPercent = 20 + Math.random() * 60; // random width for shimmer
          return (
            <div
              key={i}
              className="h-5 bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)] bg-[length:200%_100%] animate-[shimmer_1.6s_infinite] rounded-md"
              style={{ width: `${widthPercent}%` }}
            />
          );
        })}
      </div>

      {/* Y-axis labels placeholder */}
      <div className="flex flex-row justify-between mt-4 space-y-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-3 w-20 bg-gray-200 rounded-md"
          />
        ))}
      </div>
    </div>
  );
}
