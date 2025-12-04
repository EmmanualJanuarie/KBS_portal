export default function LineGraphSkeleton() {
  return (
    <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-6 w-[23rem] md:w-[23rem] lg:w-100 xl:w-100 max-w-3xl">
      {/* Heading placeholder */}
      <div className="h-6 w-1/3  mb-6 rounded-md bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)] bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]" />

      {/* Graph container */}
      <div className="relative w-full h-72 bg-gray-50 rounded-md overflow-hidden border border-gray-100">
        {/* Horizontal grid lines */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute left-0 w-full h-[1px] bg-gray-200"
            style={{ top: `${(i + 1) * 20}%` }}
          />
        ))}

        {/* Simulated chart line */}
        <svg
          viewBox="0 0 400 200"
          className="absolute top-0 left-0 w-full h-full"
        >
          <path
            d="M 20 150 C 100 100, 180 80, 260 120 S 380 140, 400 80"
            stroke="url(#lineShimmer)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="lineShimmer" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e5e7eb" />
              <stop offset="50%" stopColor="#f9fafb" />
              <stop offset="100%" stopColor="#e5e7eb" />
            </linearGradient>
          </defs>
        </svg>

        {/* Simulated data points */}
        {[40, 120, 200, 280, 360].map((x, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)] bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]"
            style={{
              left: `${x}px`,
              top: `${150 - Math.sin(i) * 40}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
