"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
} from "recharts"
import { Card, CardContent } from "@/components/ui/card"

const barData = [
  { name: "XS", legendName: "Product 1", value: 70, color: "#7D4283"},
  { name: "S", legendName: "Product 2", value: 125, color: "#F57C00" },
  { name: "M", legendName: "Product 3", value: 175, color: "#FFA726" },
]


const pieData = [
  { name: "Product 1", value: 50, color: "#7D4283" },
  { name: "Product 2", value: 50, color: "#F57C00" },
]

// Custom tick formatter for Y-axis
const formatYAxisTick = (value) => {
return value.toString();
};

export default function Charts() {
  return (
    <section className="mx-2 md:mx-12">
      <div className="max-w-6xl mx-3 md:mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center md:text-left">Our charts</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bar Chart */}
          <Card className="bg-[#1B1B1B] border-none text-white md:col-span-2  px-0 gap-1">
            <CardContent className="p-0">
                <div className="px-6">
                    <h3 className="text-lg font-semibold">Net Profit</h3>
                    <p className="text-sm text-gray-400 mb-4">2024</p>
                    <p>&nbsp;</p>
                </div>
                <hr className="w-full border-[#4F4F4F]"></hr>
              <ResponsiveContainer width="100%" height={250} className="py-6 pb-0">
                <BarChart data={barData}>
                    <CartesianGrid 
                        strokeDasharray="3 3" 
                        stroke="#404040"
                        horizontal={true}
                        vertical={false}
                    />
                    <XAxis
                        dataKey="name"
                        // stroke="#888888"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#9ca3af', fontSize: 12 }}
                    />
                    <YAxis
                        // stroke="#888888"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#9ca3af', fontSize: 12 }}
                        tickFormatter={formatYAxisTick}
                        domain={[0, 200]}
                        ticks={[0, 25, 50, 75, 100, 125, 150, 175, 200]}
                    />
                    <Bar dataKey="value" barSize={20} fill={(entry) => entry.color} >
                        {barData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
            {/* Legend for Bar Chart */}
            <div className="flex flex-wrap gap-4 px-6">
              {barData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-gray-300 text-sm">{item.legendName}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Pie Chart */}
          <Card className="bg-[#1B1B1B] border-none text-white px-0">
            <CardContent className="px-0">
                <div className="px-6">
                    <h3 className="text-lg font-semibold">Primary Text</h3>
                    <p>5.987,34</p>
                    <p className="text-sm text-[#BDBDBD] mb-4">Secondary text</p>
                </div>
                <hr className="w-full border-[#4F4F4F]"></hr>
              <ResponsiveContainer width="100%" height={250} className="p-6">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    stroke="none"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  {/* 50% label in top purple section */}
                  <text 
                    x="50%" 
                    y="17%" 
                    textAnchor="middle" 
                    dominantBaseline="middle" 
                    className="fill-white text-sm"
                  >
                    50%
                  </text>
                  {/* 50% label in bottom orange section */}
                  <text 
                    x="50%" 
                    y="75%" 
                    textAnchor="middle" 
                    dominantBaseline="middle" 
                    className="fill-white text-sm"
                  >
                    50%
                  </text>
                  <Legend align="left" formatter={(value, entry, index) => <span className="text-white text-sm">{value}</span>} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
