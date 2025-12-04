export default function EventSkeleton() {
  return (
    <div className="p-6 space-y-4 w-full max-w-full mx-auto">
      {[...Array(1)].map((_, i) => (
        <div
          key={i}
          className="bg-white shadow-md overflow-hidden animate-pulse"
        >
          {/* Header */}
          <div className="h-10 w-1/2 rounded-md bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)] 
                          bg-[length:200%_100%] animate-[shimmer_1.6s_infinite] m-4" />

          {/* Table/Content placeholder */}
          <div className="flex flex-col gap-3 p-4">
            {[...Array(4)].map((_, j) => (
              <div
                key={j}
                className="h-6 w-full rounded-md bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)] 
                            bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
