export default function CourseSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 animate-pulse">
      {Array(3)
        .fill(0)
        .map((_, idx) => (
          <div key={idx} className="bg-white border rounded-xl shadow-md p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-col gap-2 w-full">
              <div className="h-5 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
              <div className="h-2 bg-gray-200 rounded w-full mt-2"></div>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <div className="h-8 w-24 bg-gray-300 rounded-lg"></div>
              <div className="h-8 w-24 bg-gray-300 rounded-lg"></div>
            </div>
          </div>
        ))}
    </div>
  );
}
