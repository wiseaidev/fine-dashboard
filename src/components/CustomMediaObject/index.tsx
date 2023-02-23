import { FC, isValidElement, memo } from "react";
import { Box, Typography } from "@pankod/refine-mui";
import CustomAvatar from "../CustomAvatar";

interface ICustomMediaObject {
  avatar: string | JSX.Element;
  avatarProps: object;
  onBodyClick: () => void;
  title: string | JSX.Element;
  titleProps: object;
  subTitle: string | JSX.Element;
  subTitleProps: object;
  actionsComponent: JSX.Element;
  footerComponent: any;
  footerComponentProps: object;
  [x: string]: any;
}

const CustomMediaObject: FC<ICustomMediaObject> = ({
  avatar,
  avatarProps,
  onBodyClick,
  title,
  titleProps,
  subTitle,
  subTitleProps,
  actionsComponent,
  footerComponent,
  footerComponentProps,
  ...rest
}): JSX.Element => {
  return (
    <Box
      sx={{ position: "relative", display: "flex", alignItems: "flex-start" }}
      {...rest}
    >
      {avatar && (
        <Box sx={{ alignItems: "center" }}>
          <Box mr={3}>
            {isValidElement(avatar) ? (
              avatar
            ) : typeof avatar === "string" ? (
              <CustomAvatar
                alt={""}
                color={""}
                phCharLength={undefined}
                sx={{ height: 60, width: 60 }}
                src={avatar}
                {...avatarProps}
              />
            ) : null}
          </Box>
        </Box>
      )}
      <Box sx={{ flex: "1 1 0%" }} onClick={onBodyClick}>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography {...titleProps}>{title}</Typography>
            <Typography {...subTitleProps}>{subTitle}</Typography>
          </Box>
          {actionsComponent && (
            <Box sx={{ alignSelf: "flex-start" }}>{actionsComponent}</Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default memo(CustomMediaObject);
