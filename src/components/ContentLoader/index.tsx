import { Box, CircularProgress } from "@pankod/refine-mui";
const ContentLoader = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        opacity: 0.6,
        left: "0px",
        top: "0px",
        zIndex: "999",
        width: "100%",
        height: "100%",
        display: "flex",
        backgroundColor: "black",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
      <Box component="span" sx={{ ml: 2 }}>
        Loading...
      </Box>
    </Box>
  );
};

export default ContentLoader;
