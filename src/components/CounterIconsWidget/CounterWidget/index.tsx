import CountUp from "react-countup";
import { FC, ReactNode } from "react";
import { Paper, Typography, Box } from "@pankod/refine-mui";

interface ICounterWidget {
  color: string;
  start: number;
  end: number;
  duration: number;
  title: string;
  children: ReactNode;
  unitBefore: string;
  unitAfter: string;
}

const CounterWidget: FC<ICounterWidget> = ({
  color,
  start,
  end,
  duration,
  title,
  children,
  unitBefore = "",
  unitAfter = "",
}): JSX.Element => {
  return (
    <Paper
      sx={{
        flexGrow: 1,
        justifyContent: "space-between",
        alignItems: { md: "flex-start", sm: "flex-end" },
        padding: 2,
        paddingTop: 6,
        height: { md: 180, sm: 126 },
        display: "flex",
        "& > *": {
          padding: "0 5px",
        },
      }}
      style={{ backgroundColor: color }}
    >
      <Box>
        <Typography
          sx={{
            color: "#fff",
            fontSize: 28,
            fontWeight: 500,
          }}
        >
          {unitBefore}
          <CountUp start={start} end={end} duration={duration} useEasing />
          {unitAfter}
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontSize: { md: 14, sm: 16 },
            fontWeight: 400,
          }}
          variant="subtitle1"
        >
          {title}
        </Typography>
      </Box>
      <Box sx={{ textAlign: "right" }}>{children}</Box>
    </Paper>
  );
};

export default CounterWidget;
