/**
 * 
 */
export default function AdminNavbarLoader(){
    return(
        <>
          <div className="min-h-screen flex flex-col bg-gray-50">
            {/* === Top Navbar === */}
            <nav className="flex flex-col p-3 items-center justify-center bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm gap-4">
              <div className="h-10 w-80  rounded-md bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)] bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]" />
              <div className="h-10 w-50 rounded-md bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)] bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]" />
            </nav>
            <nav className="flex p-10 justify-end bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm">
              <div className="h-10 w-80 rounded-md bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)] bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]" />
            </nav>

            {/* === Main Layout === */}
            <div className="flex flex-1 overflow-hidden">
              {/* Content Pane */}
              <main className="flex-1 bg-gray-100 p-6">
                <div className="h-full w-full rounded-xl border border-gray-200 shadow-sm bg-[linear-gradient(90deg,#e5e7eb_25%,#f9fafb_50%,#e5e7eb_75%)] bg-[length:200%_100%] animate-[shimmer_1.6s_infinite]" />
              </main>
            </div>
          </div>
        </>
    );
}