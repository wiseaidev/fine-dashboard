import CustomMediaObject from "../../CustomMediaObject";
import CustomAvatar from "../../CustomAvatar";
import CustomMenu from "../../CustomDropDownMenu/CustomMenu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  alpha,
  Button,
  Box,
  IconButton,
  Tooltip,
  Typography,
} from "@pankod/refine-mui";
import DateHelper from "./DateHelper";
import { FC, Key } from "react";

interface IRequestItem {
  item: any;
  onAccept: (arg0: any, arg1: any) => void;
  onReject: (arg0: any, arg1: any) => void;
  itemIndex: Key;
}

const RequestItem: FC<IRequestItem> = ({
  item,
  onAccept,
  onReject,
  itemIndex,
}): JSX.Element => {
  const actions = [
    {
      label: "View Profile",
    },
    {
      label: "Ignore",
    },
  ];

  return (
    <Box
      sx={{
        padding: "8px 24px",
        borderTop: "solid 1px #000",
        cursor: "pointer",
        transition: "all .2s",
        "&:last-child": {
          borderBottom: `1px solid ${alpha("#000", 0.035)}`,
        },
        "&:hover": {
          backgroundColor: alpha("#fff", 0.08),
          transform: "translateY(-4px)",
          boxShadow: `0 3px 10px 0 ${alpha("#000", 0.2)}`,
          "& $dateTextRoot": {
            width: 0,
          },
          "& $hideContent": {
            transform: "translateX(0)",
            width: "100%",
          },
        },
        "& .Cmt-media-object": {
          alignItems: "center",
        },
      }}
    >
      <CustomMediaObject
        avatar={
          <CustomAvatar
            sx={{
              height: { sm: 56, md: 40 },
              width: { sm: 56, md: 40 },
            }}
            src={item.user.profile_pic}
            alt={item.user.name}
            color={""}
            phCharLength={undefined}
          />
        }
        title={item.user.name}
        titleProps={{
          variant: "h4",
          fontSize: 14,
        }}
        subTitle={`@${item.user.username}`}
        subTitleProps={{
          variant: "body2",
          fontSize: 12,
          letterSpacing: 0.4,
          color: "grey",
        }}
        actionsComponent={
          <Box display="flex" alignItems="center">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                width: "100%",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Typography
                sx={{
                  fontSize: 12,
                  letterSpacing: 0.4,
                  color: "grey",
                  transition: "all 0.4s ease",
                  overflow: "hidden",
                  position: "absolute",
                  right: 0,
                }}
                component="span"
              >
                {DateHelper.getDateText(item.created_at)}
              </Typography>
              <Box>
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  sx={{ ml: 15, mr: { md: 2, sm: 2, xs: 15 } }}
                  onClick={() => onAccept(item, itemIndex)}
                >
                  Accept
                </Button>
                <Button
                  size="small"
                  color="error"
                  sx={{ ml: { md: 0, sm: 15, xs: 15 }, mr: 15 }}
                  onClick={() => onReject(item, itemIndex)}
                >
                  Reject
                </Button>
              </Box>
            </Box>
            <CustomMenu
              Component={
                <Tooltip title="More">
                  <IconButton style={{ marginLeft: 4 }}>
                    <MoreVertIcon />
                  </IconButton>
                </Tooltip>
              }
              items={actions}
              onItemClick={() => {}}
            />
          </Box>
        }
        avatarProps={{}}
        onBodyClick={() => {}}
        footerComponent={{}}
        footerComponentProps={{}}
      />
    </Box>
  );
};

export default RequestItem;
