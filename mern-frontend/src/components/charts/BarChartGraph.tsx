import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

type RevenueData = {
  course: string;
  revenue: number;
  abbreviation: string;
};

type RevenueChartProps = {
  graphHeading: string;
  data: RevenueData[];
};

export default function BarChartGraph({ graphHeading, data }: RevenueChartProps) {
  return (
    <>

    <div className="bg-white/96 shadow-lg rounded-xl border-gray w-[23rem] md:w-[23rem] lg:w-100 xl:w-100">
            <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-gray-700 text-center">
                    {graphHeading}
                </h3> 
                <div className="w-full h-72">
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data} >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="abbreviation"/>
                        <YAxis />
                        <Tooltip formatter={(value: number) => `R${value.toLocaleString()}`}
                        labelFormatter={(abbreviation: string) =>{
                            const fullName = data.find(d=> d.abbreviation === abbreviation)?.course;
                            return fullName ?? abbreviation;
                          }} />
                        <Legend />
                        <Bar dataKey="revenue" fill="#4F46E5" barSize={40} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
        </>
  );
}
