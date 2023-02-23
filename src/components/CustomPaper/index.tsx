import { ReactNode, FC } from "react";
import { Typography, Paper, Box, lighten } from "@pankod/refine-mui";

interface ICustomPaperProps {
  title: string;
  desc: string;
  icon: ReactNode;
  children: ReactNode;
}

const CustomPaper: FC<ICustomPaperProps> = ({
  title,
  desc,
  children,
  icon,
}) => {
  return (
    <Box>
      <Paper
        sx={{
          "& $title": {
            "&:after": {
              borderBottom: `5px solid #fff`,
            },
          },
          width: "100%",
          paddingTop: 1,
          paddingBottom: 1,
          marginBottom: 2.5,
          marginRight: 3,
          boxShadow: "#fff",
        }}
        elevation={1}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <Box
            component="span"
            sx={{
              borderRadius: "30px",
              border: `1px solid ${lighten("#000", 0.9)}`,
              boxShadow: "0 2px 15px -5px #000",
              background: lighten("#fff", 0.5),
              width: 48,
              height: 48,
              textAlign: "center",
              lineHeight: "44px",
              verticalAlign: "middle",
              marginRight: 1.5,
              marginLeft: 2.5,
              "& > *": {
                fontSize: 28,
                marginTop: 1.3,
                verticalAlign: "baseline",
                color: "#000",
              },
            }}
          >
            {icon}
          </Box>
          <Box
            sx={{
              flex: 1,
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              sx={{
                position: "relative",
                textTransform: "capitalize",
                fontSize: 24,
                fontWeight: 400,
                marginTop: 3,
                color: "text.primary",
              }}
            >
              {title}
            </Typography>
            <Typography
              component="p"
              sx={{
                maxWidth: 960,
                paddingTop: 1,
              }}
            >
              {desc}
            </Typography>
          </Box>
        </Box>
        <Box
          component="section"
          sx={{
            marginTop: 1,
            padding: 1,
            borderRadius: "30px",
          }}
        >
          {children}
        </Box>
      </Paper>
    </Box>
  );
};

export default CustomPaper;
