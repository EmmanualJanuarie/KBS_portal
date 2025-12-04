export default function TableSkeleton() {
  // shimmer utility class for readability
  const shimmer =
    "bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)] bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]";

  // number of skeleton rows
  const rows = Array.from({ length: 6 });

  return (
    <div className="flex bg-gold/96 p-10 w-11/12 justify-center items-center">

      {/* DESKTOP TABLE SKELETON */}
      <div className="hidden lg:block shadow-xl rounded-xl w-full max-w-5xl">
        <table className="w-full border-collapse bg-white rounded-xl overflow-hidden">

          {/* HEADER SKELETON */}
          <thead className="bg-gray-100 text-gray-800 uppercase text-sm font-semibold">
            <tr>
              {[
                "Name",
                "Surname",
                "Email",
                "Cell_Number",
                "Password",
                "Role",
                "Auth_Code",
                "Expire",
                "Status",
              ].map((_, idx) => (
                <th key={idx} className="px-6 py-4 text-left">
                  <div className={`h-4 w-20 rounded-md ${shimmer}`} />
                </th>
              ))}
            </tr>
          </thead>

          {/* BODY SKELETON ROWS */}
          <tbody>
            {rows.map((_, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b hover:bg-gray-50 transition"
              >
                {Array.from({ length: 9 }).map((_, colIndex) => (
                  <td key={colIndex} className="px-6 py-4">
                    <div className={`h-4 w-24 rounded-md ${shimmer}`} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARD SKELETON */}
      <div className="flex flex-col gap-10 justify-center lg:hidden w-full max-w-md">
        {rows.map((_, idx) => (
          <div
            key={idx}
            className="p-5 bg-white/95 rounded-xl shadow-lg border border-gray-200"
          >
            <div className="flex flex-col gap-4">

              {[
                "Name",
                "Surname",
                "Email",
                "Cell No.",
                "Password",
                "Role",
                "Auth Code",
                "Expire",
                "Status",
              ].map((label, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center gap-6"
                >
                  <span className="font-semibold text-gray-600">{label}:</span>
                  <div
                    className={`h-4 w-24 rounded-md ${shimmer}`}
                  />
                </div>
              ))}

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
