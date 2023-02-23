import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type chartDataType = Array<{
  name: string;
  RSI: number;
  Stochastic: number;
}>;

const fakeChartData: chartDataType = [
  {
    name: "Sun",
    RSI: 102,
    Stochastic: 22,
  },
  {
    name: "Mon",
    RSI: 90,
    Stochastic: 3,
  },
  {
    name: "Tue",
    RSI: 40,
    Stochastic: 5,
  },
  {
    name: "Wed",
    RSI: 180,
    Stochastic: 24,
  },
  {
    name: "Thu",
    RSI: 220,
    Stochastic: 25,
  },
  {
    name: "Fri",
    RSI: 100,
    Stochastic: 15,
  },
  {
    name: "Sat",
    RSI: 150,
    Stochastic: 23,
  },
];

function simulateLoading() {
  return new Promise((resolve) => setTimeout(resolve, 500));
}

export const cryptoChartApi = createApi({
  reducerPath: "cryptoChartApi",
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

export const { useChartDataQuery } = cryptoChartApi;
