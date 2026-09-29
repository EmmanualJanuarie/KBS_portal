/**
 * // Upload or manage files, documents, and media for users/courses
 * 
 * @function ResourceManagementPane
 * @returns tsx script to render Resource Management Pane
 */

import { useEffect, useState } from "react";
import ResourceSkeleton from "../../../skeleton-loaders/ResourceSkeleton";

type ResourceItem = {
  id: string;
  courseName: string;
  filename: string;
  url: string;
  type: "document" | "image" | "video" | "other";
  uploadedAt: string;
};

type Course = {
  id: string;
  name: string;
};


export default function ResourceManagementPane() {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [resources, setResources] = useState<ResourceItem[]>([]);
  const [file, setFile] = useState<File | null>(null);

  /* Load Courses */
  useEffect(() => {
    setCourses([
      { id: "1", name: "Startup Fundamentals" },
      { id: "2", name: "Business Strategy & Growth" },
      { id: "3", name: "Financial Management for Entrepreneurs" },
      { id: "4", name: "Marketing & Branding Essentials" },
      { id: "5", name: "Leadership & Team Building" },
    ]);
    setLoading(false);
  }, []);

  const loadCourseResources = (courseName: string) => {
    setSelectedCourse(courseName);
  };

  /* Detect File Type */
  const detectType = (filename: string): ResourceItem["type"] => {
    const ext = filename.split(".").pop()?.toLowerCase();
    if (!ext) return "other";

    if (["pdf", "doc", "docx", "xls", "xlsx"].includes(ext)) return "document";
    if (["png", "jpg", "jpeg", "gif", "webp"].includes(ext)) return "image";
    if (["mp4", "mov", "avi", "mkv"].includes(ext)) return "video";

    return "other";
  };

  /* Upload File */
  const handleUpload = async () => {
    if (!file || !selectedCourse) return alert("Please select a file & course.");

    const newItem: ResourceItem = {
      id: Date.now().toString(),
      filename: file.name,
      courseName: selectedCourse,
      type: detectType(file.name),
      uploadedAt: new Date().toISOString().slice(0, 10),
      url: URL.createObjectURL(file),
    };

    setResources((prev) => [...prev, newItem]);
    setFile(null);
  };

  /* Delete Resource */
  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this resource?")) return;
    setResources((prev) => {
      const resource = prev.find((item) => item.id === id);
      if (resource?.url.startsWith("blob:")) URL.revokeObjectURL(resource.url);
      return prev.filter((r) => r.id !== id);
    });
  };

  return (
    <div className="p-8 w-full flex flex-col gap-8">

      {/* PANEL CARD */}
      <div className="bg-white border rounded-2xl shadow-md p-6 flex flex-col gap-6">

        <p className="text-sm text-gray-600" role="status">
          Demo only: files stay in this browser session and are not uploaded or saved to a server.
        </p>

        {/* Upload Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-center">

          <select
            className="border p-2 rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-kbs-blue"
            value={selectedCourse}
            onChange={(e) => loadCourseResources(e.target.value)}
          >
            <option value="">Select Course</option>
            {courses.map((c) => (
              <option key={c.id} value={c.name}>{c.name}</option>
            ))}
          </select>

          <input
            type="file"
            className="border p-2 rounded-lg w-full md:w-auto bg-gray-50"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />

          <button
            className="btn-type-3 px-5 py-2 rounded-lg"
            onClick={handleUpload}
          >
            Upload Resource
          </button>
        </div>

        {/* Content Section */}
        <div className="mt-4">
          {loading ? (
            <ResourceSkeleton />
          ) : selectedCourse === "" ? (
            <div className="text-gray-500">Select a course to manage its resources.</div>
          ) : resources.filter((resource) => resource.courseName === selectedCourse).length === 0 ? (
            <div className="text-gray-500">No resources found for this course.</div>
          ) : (
            <>
              {/* DESKTOP TABLE */}
              <div className="overflow-x-auto hidden md:block">
                <table className="min-w-full text-left bg-white rounded-xl overflow-hidden">
                  <thead className="bg-kbs-blue text-white">
                    <tr>
                      <th className="px-4 py-3 text-sm font-medium">#</th>
                      <th className="px-4 py-3 text-sm font-medium">File Name</th>
                      <th className="px-4 py-3 text-sm font-medium">Type</th>
                      <th className="px-4 py-3 text-sm font-medium">Uploaded</th>
                      <th className="px-4 py-3 text-sm font-medium">Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {resources.filter((resource) => resource.courseName === selectedCourse).map((res, index) => (
                      <tr key={res.id} className="border-t hover:bg-gray-50">
                        <td className="px-4 py-3">{index + 1}</td>
                        <td className="px-4 py-3">{res.filename}</td>

                        <td className="px-4 py-3">
                          <span
                            className={`px-2 py-1 rounded text-white text-xs
                              ${
                                res.type === "document"
                                  ? "bg-blue-500"
                                  : res.type === "image"
                                  ? "bg-green-500"
                                  : res.type === "video"
                                  ? "bg-purple-500"
                                  : "bg-gray-500"
                              }`}
                          >
                            {res.type}
                          </span>
                        </td>

                        <td className="px-4 py-3">{res.uploadedAt}</td>

                        <td className="px-4 py-3 flex gap-4">
                          <a
                            href={res.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-green-600 hover:underline"
                          >
                            View
                          </a>
                          <button
                            onClick={() => handleDelete(res.id)}
                            className="text-red-500 hover:underline"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* MOBILE CARDS */}
              <div className="flex flex-col gap-4 md:hidden">
                {resources.filter((resource) => resource.courseName === selectedCourse).map((res) => (
                  <div
                    key={res.id}
                    className="border rounded-xl shadow-sm p-4 bg-gray-50"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-base font-semibold">{res.filename}</h3>
                      <span
                        className={`px-2 py-1 rounded text-white text-xs
                          ${
                            res.type === "document"
                              ? "bg-blue-500"
                              : res.type === "image"
                              ? "bg-green-500"
                              : res.type === "video"
                              ? "bg-purple-500"
                              : "bg-gray-500"
                          }`}
                      >
                        {res.type}
                      </span>
                    </div>

                    <p className="text-sm text-gray-600 mb-3">
                      Uploaded: <span className="font-medium">{res.uploadedAt}</span>
                    </p>

                    <div className="flex justify-between mt-2">
                      <a
                        href={res.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-green-600 font-medium hover:underline"
                      >
                        View
                      </a>

                      <button
                        onClick={() => handleDelete(res.id)}
                        className="text-red-500 font-medium hover:underline"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
