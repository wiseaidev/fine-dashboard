import React, { FC, ReactNode } from "react";

import { Box, IconButton } from "@pankod/refine-mui";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import CustomContentHead from "../CustomContentHead";
import CustomMenu from "../CustomDropDownMenu/CustomMenu";

const contentRef = React.createRef();

interface ICustomCardHeader {
  icon: any;
  avatar: any;
  title: string;
  titleProps: any;
  subTitle: any;
  subTitleProps: any;
  actions: any;
  actionMenuClassName: any;
  actionHandleIcon: string;
  actionHandler: any;
  actionsPos: string;
  actionsShowOnHover: any;
  backgroundColor: string;
  gradientDirection: string;
  color: string;
  borderWidth: number;
  borderStyle: string;
  alignCenter: string;
  children: ReactNode;
}

const CustomCardHeader: FC<ICustomCardHeader> = React.forwardRef(
  function CustomCardHeader(
    {
      icon,
      avatar,
      title,
      titleProps,
      subTitle,
      subTitleProps,
      actions,
      actionMenuClassName,
      actionHandleIcon,
      actionHandler,
      actionsPos,
      actionsShowOnHover,
      backgroundColor,
      gradientDirection,
      color,
      borderWidth,
      borderStyle,
      alignCenter,
      children,
      ...rest
    },
    ref
  ) {
    return (
      <Box
        className="custom-header-root"
        sx={{
          display: "flex",
          flexDirection: "row",
          position: "relative",
          zIndex: 1,
          p: 2,
          alignItems: "center",
        }}
        {...rest}
      >
        {(icon || avatar || title || subTitle) && (
          <CustomContentHead
            icon={icon}
            avatar={avatar}
            title={title}
            subTitle={subTitle}
          />
        )}

        {(actions.length > 0 || children) && (
          <Box ref={contentRef}>
            {children}
            {actions.length > 0 && (
              <Box style={{ marginLeft: "28px", marginTop: "-28px" }}>
                <CustomMenu
                  Component={
                    <IconButton size="small">
                      {icon || <MoreVertIcon />}
                    </IconButton>
                  }
                  items={actions}
                  onItemClick={actionHandler}
                />
              </Box>
            )}
          </Box>
        )}
      </Box>
    );
  }
);

export default CustomCardHeader;
