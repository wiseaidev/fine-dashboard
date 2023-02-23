import { useState } from "react";
import { useChartDataQuery } from "api/CyrptoChart";
import ContentLoader from "../ContentLoader";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Typography,
  Box,
} from "@pankod/refine-mui";

import InsightsIcon from "@mui/icons-material/Insights";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CustomPaper from "../CustomPaper";

const CryptoChartWidget = () => {
  const { data: dataCrypto, isLoading, isError } = useChartDataQuery();
  const [checked, setChecked] = useState(["stoch", "rsi"]);
  if (isLoading) {
    return <ContentLoader />;
  } else if (isError) {
    return (
      <div>
        <p>"Something went wrong!"</p>
      </div>
    );
  }

  const handleToggle = (value: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <CustomPaper title="Crypto Chart" icon={<InsightsIcon />} desc="">
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <Grid container spacing={2}>
            <Grid
              item
              md={5}
              xs={12}
              sx={{
                marginLeft: 6,
              }}
            >
              <Box component="form" autoComplete="off">
                <Typography variant="h4">BTC (Bitcoin)</Typography>
              </Box>
            </Grid>
            <Grid
              item
              md={2}
              xs={6}
              sx={{
                marginLeft: -12,
              }}
            >
              <Typography variant="caption">Last Price</Typography>
              <Typography variant="subtitle1">$ 23,844</Typography>
            </Grid>
            <Grid
              item
              md={2}
              xs={6}
              sx={{
                marginLeft: -2,
              }}
            >
              <Typography variant="caption">Daily Changes</Typography>
              <Typography variant="subtitle1">$ 191.92</Typography>
            </Grid>
            <Grid
              item
              md={3}
              xs={12}
              sx={{
                marginLeft: -2,
              }}
            >
              <Typography variant="caption">24H Volume</Typography>
              <Typography variant="subtitle1">23,634.00 BTC</Typography>
            </Grid>
          </Grid>
          <Box
            sx={{
              overflow: "hidden",
              marginTop: 3,
            }}
          >
            <Box
              sx={{
                width: "100%",
                minWidth: 400,
                height: 900,
                position: "relative",
                marginLeft: 2,
              }}
            >
              <ResponsiveContainer width={"100%"} height="80%">
                <ComposedChart data={dataCrypto}>
                  <XAxis dataKey="name" tickLine={false} />
                  <YAxis
                    axisLine={false}
                    tickSize={3}
                    tickLine={false}
                    tick={{ stroke: "none" }}
                  />
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <Tooltip />
                  <Bar
                    stackId="2"
                    barSize={10}
                    fillOpacity="0.8"
                    dataKey="RSI"
                    fill={"#8884d8"}
                  />
                  <Bar
                    stackId="5"
                    barSize={10}
                    fillOpacity="0.8"
                    dataKey="ParabolicSAR"
                    fill={"#8884d8"}
                  />
                  {checked.indexOf("rsi") > -1 && (
                    <Line
                      type="monotone"
                      dataKey="RSI"
                      strokeWidth={2}
                      stroke={"#8908a7"}
                    />
                  )}
                  {checked.indexOf("stoch") > -1 && (
                    <Area
                      type="monotone"
                      stackId="6"
                      dataKey="Stochastic"
                      stroke={"salmon"}
                      fill={"goldenrod"}
                    />
                  )}
                  <Legend iconType="circle" iconSize={10} />
                </ComposedChart>
              </ResponsiveContainer>
            </Box>
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box
            sx={{
              marginRight: 1,
            }}
          />
          <Box
            sx={{
              width: "100%",
              marginTop: 2,
              overflowX: "auto",
            }}
          >
            <List>
              <ListItem
                role={undefined}
                dense
                onClick={handleToggle("stoch")}
                sx={{
                  padding: 2,
                  fontSize: 25,
                }}
              >
                <Checkbox
                  checked={checked.indexOf("stoch") !== -1}
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText
                  primary="Stochastic"
                  secondary="Beatae perferendis et."
                />
              </ListItem>
              <ListItem
                role={undefined}
                dense
                onClick={handleToggle("rsi")}
                sx={{
                  padding: 2,
                }}
              >
                <Checkbox
                  checked={checked.indexOf("rsi") !== -1}
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText
                  primary="RSI"
                  secondary=" Praesentium odio delectus quia accusantium autem qui esse."
                />
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </CustomPaper>
  );
};

export default CryptoChartWidget;
