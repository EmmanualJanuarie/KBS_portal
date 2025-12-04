export default function PieGraphSkeleton() {
  return (
    <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-6 w-[23rem] md:w-[23rem] lg:w-100 xl:w-100 max-w-3xl">
      {/* Heading placeholder */}
      <div className="h-6 w-1/3 mb-6 rounded-md bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)] bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]" />

      {/* Pie chart container */}
      <div className="relative w-full h-72 bg-gray-50 rounded-md overflow-hidden border border-gray-100 flex items-center justify-center">
        {/* Simulated pie chart circle */}
        <div className="w-40 h-40 rounded-full bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)] bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]" />

        {/* Optional small legend placeholders */}
        <div className="absolute bottom-4 flex gap-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-4 w-16 rounded-md bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)] bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
