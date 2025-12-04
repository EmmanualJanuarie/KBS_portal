import { CartesianGrid, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, LineChart } from "recharts";

type lineChartProps = {
    graphHeading: string;
    data: {name: string; sales?: number; visitors?: number}[];
}

export default function LineChartGraph({graphHeading, data}:lineChartProps){
    return(
        <>
        <div className="bg-white/96 shadow-lg rounded-xl border-gray w-[23rem] md:w-[23rem] lg:w-100 xl:w-100">
            <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-gray-700 text-center">
                    {graphHeading}
                </h3> 
                <div className="w-full h-72">
                    <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                        type="monotone"
                        dataKey="visitors"
                        stroke="#4F46E5"
                        strokeWidth={3}
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                        />
                    </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
        </>
    );
}