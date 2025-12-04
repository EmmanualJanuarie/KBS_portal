export default function LessonSkeleton() {
  return (
    <div className="grid gap-4 animate-pulse">
      {Array(4)
        .fill(0)
        .map((_, idx) => (
          <div key={idx} className="bg-white border rounded-xl shadow-md p-4 flex justify-between items-center">
            <div className="h-5 bg-gray-300 rounded w-3/4"></div>
            <div className="h-8 w-32 bg-gray-300 rounded-lg"></div>
          </div>
        ))}
    </div>
  );
}
