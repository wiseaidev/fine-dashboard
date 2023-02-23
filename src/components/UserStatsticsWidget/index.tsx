import { Box } from "@pankod/refine-mui";
import CustomCard from "../CustomCard/CustomCard";
import CustomCardHeader from "../CustomCard/CustomCardHeader";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import ContentLoader from "../ContentLoader";

import TodayIcon from "@mui/icons-material/Today";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useTranslate } from "@pankod/refine-core";
import { useChartDataQuery } from "api/Statistics";

const DataChart = (chartData: any) => {
  const data = Object.values(chartData)[0] as any[];
  return (
    <ResponsiveContainer width="100%" height={170}>
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <XAxis dataKey="month" />
        <Tooltip
          labelStyle={{ color: "black" }}
          itemStyle={{ color: "brown" }}
          cursor={true}
        />
        <Area
          dataKey="expence"
          type="monotone"
          strokeWidth={0}
          stackId="1"
          stroke="red"
          fill="red"
          fillOpacity={0.5}
        />
        <Area
          dataKey="income"
          type="monotone"
          strokeWidth={0}
          stackId="2"
          stroke="lightgreen"
          fill="lightgreen"
          fillOpacity={0.4}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

const UserStatsticsWidget = () => {
  const { data, isLoading, isError } = useChartDataQuery();
  const t = useTranslate();
  if (isLoading) {
    return <ContentLoader />;
  } else if (isError) {
    return (
      <div>
        <p>"Something went wrong!"</p>
      </div>
    );
  }
  return (
    <CustomCard
      backgroundColor={""}
      backgroundImage={""}
      gradientDirection={""}
      colors={""}
      direction={""}
      className={"CustomCard"}
    >
      <CustomCardHeader
        title="User Statistics"
        subTitle={
          <Box display="flex" alignItems="center" mt={2}>
            <Box component="span" display="flex" alignItems="center" mr={4}>
              <Box
                component="span"
                sx={{
                  height: 8,
                  width: 8,
                  borderRadius: "50%",
                  backgroundColor: "lightgreen",
                }}
                mr={1}
              />
              <Box
                component="span"
                color="lightgreen"
                fontSize={12}
                sx={{
                  textTransform: "capitalize",
                }}
              >
                Income
              </Box>
            </Box>
            <Box component="span" display="flex" alignItems="center">
              <Box
                component="span"
                sx={{
                  height: 8,
                  width: 8,
                  opacity: "0.8",
                  borderRadius: "50%",
                  backgroundColor: "red",
                  mr: 1,
                }}
              />
              <Box
                component="span"
                color="red"
                sx={{
                  textTransform: "capitalize",
                  fontSize: 12,
                  opacity: "0.8",
                }}
              >
                Expences
              </Box>
            </Box>
          </Box>
        }
        icon={""}
        avatar={""}
        titleProps={undefined}
        subTitleProps={undefined}
        actions={[
          {
            icon: <TodayIcon />,
            label: t("buttons.account", "Month"),
          },
          {
            icon: <CalendarMonthIcon />,
            label: t("buttons.account", "Year"),
          },
        ]}
        actionMenuClassName={undefined}
        actionHandleIcon={""}
        actionHandler={undefined}
        actionsPos={""}
        actionsShowOnHover={undefined}
        backgroundColor={""}
        gradientDirection={""}
        color={""}
        borderWidth={0}
        borderStyle={""}
        alignCenter={""}
        children={undefined}
      />
      <DataChart chartData={data} />
    </CustomCard>
  );
};

export default UserStatsticsWidget;
