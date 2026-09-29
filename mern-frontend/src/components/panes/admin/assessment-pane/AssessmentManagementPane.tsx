import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import AssessmentSkeleton from "../../../skeleton-loaders/AssessmentSkeleton";
import React from "react";

interface Assessment {
  id: number;
  courseName: string;
  userName: string;
  company?: string; // optional company for employees
  score: number; // percentage
  completedAt: string;
}

export default function AssessmentManagementPane() {
  const [assessments, setAssessments] = useState<Assessment[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedCompanies, setExpandedCompanies] = useState<string[]>([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setAssessments([
        { id: 1, courseName: "Startup Fundamentals", userName: "Elena Roberts", score: 85, completedAt: "2025-12-01" },
        { id: 2, courseName: "Startup Fundamentals", userName: "Tommy Nguyen", company: "TechCorp", score: 91, completedAt: "2025-12-01" },
        { id: 3, courseName: "Business Strategy & Growth", userName: "Marcus Lee", score: 92, completedAt: "2025-12-02" },
        { id: 4, courseName: "Business Strategy & Growth", userName: "Anna Brown", company: "FinSolve", score: 88, completedAt: "2025-12-02" },
        { id: 5, courseName: "Financial Management for Entrepreneurs", userName: "Sophia Patel", score: 78, completedAt: "2025-12-03" },
        { id: 6, courseName: "Financial Management for Entrepreneurs", userName: "Liam Johnson", company: "BizWorks", score: 64, completedAt: "2025-12-03" },
        { id: 7, courseName: "Marketing & Branding Essentials", userName: "David Kim", score: 88, completedAt: "2025-12-03" },
        { id: 8, courseName: "Marketing & Branding Essentials", userName: "Priya Shah", company: "Brandify", score: 93, completedAt: "2025-12-04" },
        { id: 9, courseName: "Leadership & Team Building", userName: "Amira Johnson", score: 95, completedAt: "2025-12-04" },
        { id: 10, courseName: "Leadership & Team Building", userName: "Carlos Mendez", company: "LeadWorks", score: 72, completedAt: "2025-12-04" },
      ]);
      setLoading(false);
    }, 1200);
  }, []);

  const handlePrintPDF = () => {
  const doc = new jsPDF();
  doc.setFont("helvetica");
  doc.setFontSize(18);
  doc.setTextColor(33, 37, 41); // Dark gray title
  doc.text("KBS Assessment Report", 105, 15, { align: "center" });

  // Line under title
  doc.setLineWidth(0.5);
  doc.setDrawColor(33, 37, 41);
  doc.line(10, 20, 200, 20);

  const headers = ["#", "Course Name", "User / Company", "Score", "Completed At"];
  const colX = [10, 35, 90, 150, 170];
  let y = 30;

  // Table header
  doc.setFillColor(243, 244, 246); // light gray
  doc.rect(10, y, 190, 8, "F");
  doc.setTextColor(33, 37, 41);
  headers.forEach((h, i) => doc.text(h, colX[i], y + 6));
  y += 10;

  const courses = Array.from(new Set(assessments.map(a => a.courseName)));

  courses.forEach((course, idxCourse) => {
    const courseAssessments = assessments.filter(a => a.courseName === course);
    const individualUsers = courseAssessments.filter(a => !a.company);
    const companies = Array.from(new Set(courseAssessments.filter(a => a.company).map(a => a.company!)));

    // Individual users
    individualUsers.forEach((a, idx) => {
      const userNameText = doc.splitTextToSize(a.userName, 55); // wrap if too long
      const courseText = doc.splitTextToSize(a.courseName, 50);

      // Add page if necessary
      if (y + userNameText.length * 6 > 280) {
        doc.addPage();
        y = 20;
      }

      doc.setTextColor(33, 37, 41);
      doc.text(`${idxCourse + 1}.${idx + 1}`, colX[0], y + 6);
      doc.text(courseText, colX[1], y + 6);
      doc.text(userNameText, colX[2], y + 6);

      // Score color
      if (a.score >= 90) doc.setTextColor(34, 197, 94); // green
      else if (a.score >= 75) doc.setTextColor(234, 179, 8); // yellow
      else doc.setTextColor(239, 68, 68); // red
      doc.text(`${a.score}%`, colX[3], y + 6);

      doc.setTextColor(33, 37, 41);
      doc.text(a.completedAt, colX[4], y + 6);

      y += Math.max(userNameText.length * 6, 8); // dynamic row height
    });

    // Companies
    companies.forEach(company => {
      const employees = courseAssessments.filter(a => a.company === company);

      // Company row with extra spacing
      if (y + 10 > 280) {
        doc.addPage();
        y = 20;
      }
      doc.setFillColor(243, 244, 246); // light gray
      doc.rect(10, y, 190, 8, "F");
      doc.setFont("helvetica", "bold");
      doc.setTextColor(31, 41, 55);
      doc.text(company, colX[2], y + 6);
      y += 10;

      employees.forEach((a, idxEmp) => {
        const userNameText = doc.splitTextToSize(a.userName, 55);
        const courseText = doc.splitTextToSize(a.courseName, 50);

        if (y + userNameText.length * 6 > 280) {
          doc.addPage();
          y = 20;
        }

        doc.setFont("helvetica", "normal");
        doc.setTextColor(33, 37, 41);
        doc.text(`${idxCourse + 1}.${idxEmp + 1}`, colX[0], y + 6);
        doc.text(courseText, colX[1], y + 6);
        doc.text(userNameText, colX[2], y + 6);

        if (a.score >= 90) doc.setTextColor(34, 197, 94);
        else if (a.score >= 75) doc.setTextColor(234, 179, 8);
        else doc.setTextColor(239, 68, 68);
        doc.text(`${a.score}%`, colX[3], y + 6);

        doc.setTextColor(33, 37, 41);
        doc.text(a.completedAt, colX[4], y + 6);

        y += Math.max(userNameText.length * 6, 8);
      });

      y += 4; // extra spacing after company block
    });
  });

  doc.save("kbs_assessment_report.pdf");
};


  const toggleCompany = (company: string) => {
    setExpandedCompanies(prev =>
      prev.includes(company) ? prev.filter(c => c !== company) : [...prev, company]
    );
  };

  // Group assessments by course
  const courses = Array.from(new Set(assessments.map(a => a.courseName)));

  return (
    <div className="p-8 w-full">
      <div className="flex justify-between items-center mb-6">
        <button className="btn-type-3 px-4 py-2" onClick={handlePrintPDF}>
          Export PDF
        </button>
      </div>

     {loading ? (
      <AssessmentSkeleton />
    ) : assessments.length === 0 ? (
      <div className="text-gray-500">No assessments available.</div>
    ) : (
      <>
        {/* DESKTOP TABLE VIEW */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-xl">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Course Name</th>
                <th className="px-4 py-2 text-left">User / Company</th>
                <th className="px-4 py-2 text-left">Score</th>
                <th className="px-4 py-2 text-left">Completed At</th>
              </tr>
            </thead>

            <tbody>
              {courses.map((course, idxCourse) => {
                const courseAssessments = assessments.filter(a => a.courseName === course);
                const individualUsers = courseAssessments.filter(a => !a.company);
                const companies = Array.from(new Set(courseAssessments.filter(a => a.company).map(a => a.company!)));

                return (
                  <React.Fragment key={course}>
                    {/* Individual Users */}
                    {individualUsers.map((a, idx) => (
                      <tr key={a.id} className="border-t border-gray-200">
                        <td className="px-4 py-2">{idxCourse + 1}.{idx + 1}</td>
                        <td className="px-4 py-2">{a.courseName}</td>
                        <td className="px-4 py-2">{a.userName}</td>
                        <td className="px-4 py-2">
                         
                           <span className="text-sm font-medium w-10 text-right">{a.score}%</span>
                        </td>
                        <td className="px-4 py-2">{a.completedAt}</td>
                      </tr>
                    ))}

                    {/* Companies */}
                    {companies.map(company => {
                      const employees = courseAssessments.filter(a => a.company === company);
                      const isExpanded = expandedCompanies.includes(company);

                      return (
                        <React.Fragment key={company}>
                          <tr
                            className="border-t border-gray-200 cursor-pointer bg-gray-50 hover:bg-gray-100"
                            onClick={() => toggleCompany(company)}
                          >
                            <td className="px-4 py-2 col-span-1">
                              <span className="font-semibold">{isExpanded ? "▲" : "▼"}</span>
                            </td>
                            <td className="px-4 py-2 col-span-4 font-semibold" colSpan={4}>
                              {company}
                            </td>
                          </tr>

                          {isExpanded &&
                            employees.map((a, idxEmp) => (
                              <tr
                                key={a.id}
                                className={`border-t border-gray-200 ${a.score < 70 ? "bg-red-100" : ""}`}
                              >
                                <td className="px-4 py-2">{idxCourse + 1}.{idxEmp + 1}</td>
                                <td className="px-4 py-2">{a.courseName}</td>
                                <td className="px-4 py-2 pl-6">{a.userName}</td>
                                <td className="px-4 py-2">
                                   <span className="text-sm font-medium w-10 text-right">{a.score}%</span>
                                </td>
                                <td className="px-4 py-2">{a.completedAt}</td>
                              </tr>
                            ))}
                        </React.Fragment>
                      );
                    })}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* MOBILE CARD VIEW */}
        <div className="md:hidden flex flex-col gap-4">
          {courses.map((course) => {
            const courseAssessments = assessments.filter(a => a.courseName === course);
            const individualUsers = courseAssessments.filter(a => !a.company);
            const companies = Array.from(new Set(courseAssessments.filter(a => a.company).map(a => a.company!)));

            return (
              <React.Fragment key={course}>
                {/* Course Header */}
                <h2 className="text-lg font-semibold mt-4">{course}</h2>

                {/* Individuals */}
                {individualUsers.map(a => (
                  <div
                    key={a.id}
                    className={`border rounded-xl p-4 shadow-sm flex flex-col gap-2 ${
                      a.score < 70 ? "bg-red-100" : "bg-white border-gray-200"
                    }`}
                  >
                    <div className="font-semibold">{a.userName}</div>
                    <div className="text-sm text-gray-500">Completed: {a.completedAt}</div>
                    <div className="text-sm font-medium">Pass Rate: {a.score}%</div>
                  </div>
                ))}

                {/* Companies */}
                {companies.map(company => {
                  const employees = courseAssessments.filter(a => a.company === company);
                  const isExpanded = expandedCompanies.includes(company);

                  return (
                    <div key={company} className="mt-3">
                      <div
                        className="cursor-pointer bg-gray-100 p-3 rounded-lg flex justify-between items-center"
                        onClick={() => toggleCompany(company)}
                      >
                        <span className="font-semibold">{company}</span>
                        <span>{isExpanded ? "▲" : "▼"}</span>
                      </div>

                      {isExpanded &&
                        employees.map(a => (
                          <div
                            key={a.id}
                            className={`border rounded-xl p-4 shadow-sm mt-2 flex flex-col gap-2 ${
                              a.score < 70 ? "bg-red-100 border-red-400" : "bg-white border-gray-200"
                            }`}
                          >
                            <div className="font-semibold">{a.userName}</div>
                            <div className="text-sm text-gray-500">Completed: {a.completedAt}</div>
                            <div className="text-sm font-medium">Pass Rate: {a.score}%</div>
                          </div>
                        ))}
                    </div>
                  );
                })}
              </React.Fragment>
            );
          })}
        </div>
      </>
    )}

    </div>
  );
}
