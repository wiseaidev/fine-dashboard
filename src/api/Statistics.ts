import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type chartDataType = Array<{
  month: string;
  income: number;
  expence: number;
}>;

const fakeChartData: chartDataType = [
  { month: "Jan", income: 400, expence: 400 },
  { month: "Feb", income: 600, expence: 650 },
  { month: "Mar", income: 800, expence: 1100 },
  { month: "Apr", income: 900, expence: 1250 },
  { month: "May", income: 845, expence: 1300 },
  { month: "Jun", income: 1000, expence: 1100 },
  { month: "Jul", income: 1150, expence: 900 },
  { month: "Aug", income: 1300, expence: 400 },
  { month: "Sep", income: 1020, expence: 400 },
  { month: "Oct", income: 930, expence: 400 },
  { month: "Nov", income: 1050, expence: 400 },
  { month: "Dec", income: 1400, expence: 400 },
];

function simulateLoading() {
  return new Promise((resolve) => setTimeout(resolve, 500));
}

export const chartApi = createApi({
  reducerPath: "chartApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (build) => ({
    chartData: build.query<chartDataType, void>({
      async queryFn() {
        await simulateLoading();
        return { data: fakeChartData };
      },
    }),
  }),
});

export const { useChartDataQuery } = chartApi;
