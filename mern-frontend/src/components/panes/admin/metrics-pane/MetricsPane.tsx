/**
 * Displays the Graphical data / Data Analystics based on user data
 * 
 * @function MetricsPane
 * @returns tsx script to render Metrics Pane
 */

import { useEffect, useState } from "react";
import LineChartGraph from "../../../charts/LineChartGraph";
import LineGraphSkeleton from "../../../skeleton-loaders/GraphSkeletons/LineGraphSkeleton";
import BarChartGraph from "../../../charts/BarChartGraph";
import BarGraphSkeleton from "../../../skeleton-loaders/GraphSkeletons/BarGraphSkeleton";
import PieChartGraph from "../../../charts/PieChartGraph";
import PieGraphSkeleton from "../../../skeleton-loaders/GraphSkeletons/PieGraphSkeleton";
import HorizontalBarChart from "../../../charts/HorizontalBarChart";
import HorizontalBarGraphSkeleton from "../../../skeleton-loaders/GraphSkeletons/HorizontalBarGraphSkeleton";
import AreaChartGraph from "../../../charts/AreaChartGraph";
import AreaGraphSkeleton from "../../../skeleton-loaders/GraphSkeletons/AreaGraphSkeleton";
import BubbleChartGraph from "../../../charts/BubbleChartGraph";
import BubbleChartSkeleton from "../../../skeleton-loaders/GraphSkeletons/BubbleGraphSkeleton";

const lineChartData = [
  { name: "Jan", sales: 4200, visitors: 2500 },
  { name: "Feb", sales: 3800, visitors: 2300 },
  { name: "Mar", sales: 4500, visitors: 2600 },
  { name: "Apr", sales: 3900, visitors: 2200 },
  { name: "May", sales: 4700, visitors: 2700 },
  { name: "Jun", sales: 5000, visitors: 3000 },
  { name: "Jul", sales: 4800, visitors: 2900 },
  { name: "Aug", sales: 5200, visitors: 3100 },
  { name: "Sep", sales: 5100, visitors: 3050 },
  { name: "Oct", sales: 5300, visitors: 3200 },
  { name: "Nov", sales: 4900, visitors: 2950 },
  { name: "Dec", sales: 0, visitors: 0  },
];


const revenueData = [
  { course: "Customer Service", revenue: 5000,abbreviation: "CS" },
  { course: "Financial Literacy", revenue: 3000, abbreviation: "FL"},
  { course: "CV Drafting", revenue: 7000, abbreviation: "CV" },
  { course: "Interview Preparation", revenue: 4500, abbreviation: "IP" },
  { course: "Workplace Etiquette", revenue: 2500, abbreviation: "WE" },
];

const mostActiveCoursesData = [
  { course: "Customer Service", abbreviation: "CS", activeUsers: 120 },
  { course: "Financial Literacy",abbreviation: "FL", activeUsers: 95 },
  { course: "CV Drafting", abbreviation: "CV", activeUsers: 80 },
  { course: "Interview Preparation", abbreviation: "IP", activeUsers: 50 },
  { course: "Workplace Etiquette",  abbreviation: "WE", activeUsers: 40 },
];


const passRateData = [
  { course: "Customer Service", abbreviation: "CS", passRate: 85 },
  { course: "Financial Literacy", abbreviation: "FL", passRate: 78 },
  { course: "CV Drafting", abbreviation: "CV", passRate: 92 },
  { course: "Interview Preparation", abbreviation: "IP", passRate: 88 },
  { course: "Workplace Etiquette", abbreviation: "WE", passRate: 95 },
];

const signupGrowthData = [
  { month: "Jan", signups: 120 },
  { month: "Feb", signups: 180 },
  { month: "Mar", signups: 260 },
  { month: "Apr", signups: 400 },
  { month: "May", signups: 550 },
  { month: "Jun", signups: 700 },
  { month: "Jul", signups: 850 },
  { month: "Aug", signups: 980 },
  { month: "Sep", signups: 1100 },
  { month: "Oct", signups: 1250 },
  { month: "Nov", signups: 1380 },
  { month: "Dec", signups: 1500 },
];


// Dummy data
const ProvinceData = [
  { province: "Gauteng", users: 1200, growth: 5 },
  { province: "Western Cape", users: 950, growth: 4 },
  { province: "KwaZulu-Natal", users: 1100, growth: 6 },
  { province: "Eastern Cape", users: 700, growth: 2 },
  { province: "Limpopo", users: 400, growth: 1 },
  { province: "Mpumalanga", users: 500, growth: 2 },
  { province: "North West", users: 350, growth: 1 },
  { province: "Free State", users: 300, growth: 1 },
  { province: "Northern Cape", users: 150, growth: 0.5 },
];

export default function MetricsPane(){

    const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            // Simulate data fetching
            const timer = setTimeout(() => setLoading(false), 1500);
            return () => clearTimeout(timer);
        }, []);

    return (
        <>
            <div className="flex flex-col justify-center items-center gap-14">
                {/* Static values are illustrative sample data, not live analytics. */}
                <div className="flex bg-white border-to-bottom-gray p-8 w-full justify-end">
                    <span className="text-sm text-gray-600">Sample metrics · illustrative data</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 justify-center items-center gap-10 md:gap-8 lg:gap-10">
                    <div>
                        {loading ? <LineGraphSkeleton /> : <LineChartGraph graphHeading="Monthly Users" data={lineChartData} />}
                    </div>

                    <div>
                        {loading ? <BarGraphSkeleton /> : <BarChartGraph graphHeading="Monthly Course Revenue" data={revenueData} />}
                    </div>

                    <div>
                        {loading ? <AreaGraphSkeleton /> : <AreaChartGraph graphHeading="Sign Up Growth" data={signupGrowthData} />}
                    </div>

                     <div>
                        {loading ? <PieGraphSkeleton /> : <PieChartGraph graphHeading="Most Active Courses" data={mostActiveCoursesData} />}
                    </div>

                    <div>
                        {loading ? <HorizontalBarGraphSkeleton /> : <HorizontalBarChart graphHeading="Pass Rate per Course" data={passRateData} />}
                    </div>

                     <div>
                        {loading ? <BubbleChartSkeleton /> : <BubbleChartGraph graphHeading="User Totals by Province" data={ProvinceData} />}
                    </div>
                </div>
            </div>
        </>
        

    )
}
