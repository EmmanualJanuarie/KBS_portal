import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

type pieChartProps = {
    graphHeading: string;
    data: { course: string; abbreviation: string; activeUsers: number }[];
};

// Colors for the slices
const COLORS = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#3B82F6", "#EC4899"];

export default function PieChartGraph({ graphHeading, data }: pieChartProps) {
    return (
        <div className="bg-white/96 shadow-lg rounded-xl border-gray w-[23rem] md:w-[23rem] lg:w-100 xl:w-100">
            <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-gray-700 text-center">
                    {graphHeading}
                </h3>
                <div className="w-full h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="activeUsers"
                                nameKey="abbreviation"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                label={({ value }) => `${value}`}
                            >
                                {data.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                             <Tooltip
                                content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                    const { course, activeUsers } = payload[0].payload;
                                    return (
                                    <div className="bg-white p-2 border border-gray-200 rounded shadow-md text-sm">
                                        <p className="font-medium">{course}</p>
                                        <p className="text-gray-600">Active Users: {activeUsers}</p>
                                    </div>
                                    );
                                }
                                return null;
                                }}
                            />
                            <Legend verticalAlign="bottom" height={36} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
