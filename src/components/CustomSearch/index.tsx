import { Box, InputBase, alpha } from "@pankod/refine-mui";
import SearchIcon from "@mui/icons-material/Search";
import { FC } from "react";

interface SearchProps {
  searchText: string;
  setSearchText: any;
}

const CustomSearch: FC<SearchProps> = ({
  searchText,
  setSearchText,
}): JSX.Element => {
  return (
    <Box
      sx={{
        display: { sm: "flex", xs: "none" },
        borderRadius: "30px",
        position: "absolute",
        left: 20,
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: alpha("#fff", 0.15),
        "&:hover": {
          backgroundColor: alpha("#fff", 0.25),
        },
      }}
    >
      <SearchIcon
        sx={{
          mr: 1,
          ml: 1,
          height: "100%",
          position: "relative",
          top: 0,
          left: 0,
          zIndex: 1,
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          "&.right": {
            left: "auto",
            right: 0,
            "& + $inputRoot $inputInput": {
              paddingLeft: 2,
              paddingRight: `calc(1em + 4 px)`,
            },
          },
        }}
      />
      <Box>
        <InputBase
          placeholder={"Search here..."}
          inputProps={{ "aria-label": "search" }}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          sx={{
            paddingRight: "calc(1em + 4px)",
            width: { xs: 71, sm: 162 },
            height: 35,
            borderRadius: 4,
            boxSizing: "border-box",
            "&:focus": {
              backgroundColor: alpha("#fff", 0.5),
              width: 235,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default CustomSearch;
