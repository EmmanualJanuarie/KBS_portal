import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from "recharts";

type PassRateData = {
  course: string;
  passRate: number;
  abbreviation: string;
};

type HorizontalBarChartProps = {
  graphHeading: string;
  data: PassRateData[];
};

export default function HorizontalBarChart({ graphHeading, data }: HorizontalBarChartProps) {
  return (
    <div className="bg-white/96 shadow-lg rounded-xl border-gray w-[23rem] md:w-[23rem] lg:w-100 xl:w-100">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-4 text-gray-700 text-center">
          {graphHeading}
        </h3> 
        <div className="w-full h-full">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              layout="vertical"
              data={data}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} unit="%" />
              <YAxis type="category" dataKey="abbreviation" />
              <Tooltip 
                formatter={(value: number) => `${value}%`} 
                labelFormatter={(abbreviation: string) => {
                  const fullName = data.find(d => d.abbreviation === abbreviation)?.course;
                  return fullName ?? abbreviation;
                }}
                />
              <Legend />
              <Bar dataKey="passRate" fill="#4F46E5" barSize={30}>
                <LabelList 
                  dataKey="passRate" 
                  position="right" 
                  formatter={(value: any) => `${value ?? 0}%`} 
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
