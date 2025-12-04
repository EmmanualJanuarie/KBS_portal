import { ResponsiveContainer, ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend } from "recharts";

type ProvinceData = {
  province: string;
  users: number;
  growth: number; // Bubble size
};

type BubbleChartProps = {
  graphHeading: string;
  data: ProvinceData[];
};

export default function BubbleChartGraph({ graphHeading, data }: BubbleChartProps) {
  return (
    <div className="bg-white/96 shadow-lg rounded-xl border-gray w-[23rem] md:w-[23rem] lg:w-100 xl:w-100">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-4 text-gray-700 text-center">
          {graphHeading}
        </h3>
        <div className="w-full h-full">
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="category" dataKey="province" name="Province" />
              <YAxis type="number" dataKey="users" name="Users" />
              <ZAxis type="number" dataKey="growth" range={[50, 400]} name="Growth" />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                formatter={(value: number, name: string) => [value, name]}
              />
              <Legend />
              <Scatter name="Provinces" data={data} fill="#4F46E5" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
