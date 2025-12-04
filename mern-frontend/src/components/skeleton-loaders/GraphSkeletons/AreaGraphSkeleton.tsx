export default function AreaGraphSkeleton() {
  return (
    <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-6 w-[23rem] md:w-[23rem] lg:w-100 xl:w-100 max-w-3xl">
      {/* Centered Heading */}
      <div className="flex justify-center mb-6">
        <div className="h-6 w-1/2 sm:w-1/3 rounded-md bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)] bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]" />
      </div>

      {/* Area chart placeholder */}
      <div className="relative w-full h-64 bg-gray-50 rounded-md overflow-hidden border border-gray-100">
        {/* Horizontal grid lines */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 w-full h-[1px] bg-gray-200"
            style={{ top: `${(i + 1) * 20}%` }}
          />
        ))}

        {/* Simulated area shape */}
        <svg viewBox="0 0 400 200" className="absolute top-0 left-0 w-full h-full">
          <defs>
            <linearGradient id="areaShimmer" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e5e7eb" />
              <stop offset="50%" stopColor="#f9fafb" />
              <stop offset="100%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
          <path
            d="M 0 180 Q 100 120, 200 130 T 400 80 L 400 200 L 0 200 Z"
            fill="url(#areaShimmer)"
            className="animate-[shimmer_1.6s_infinite]"
          />
        </svg>
      </div>

      {/* X-axis label placeholders */}
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
