import React, { FC, isValidElement } from "react";
import CustomTitle from "../CustomTitle";
import CustomSubTitle from "../CustomSubTitle";
import { Box } from "@pankod/refine-mui";

interface ICustomContentHead {
  icon: any;
  avatar: any;
  title: string;
  subTitle: string;
}

/**
 *
 * @param icon
 * @param avatar
 * @param title
 * @param subTitle
 * @returns { JSX.Element }
 */
const CustomContentHead: FC<ICustomContentHead> = ({
  icon,
  avatar,
  title,
  subTitle,
  ...restProps
}): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
      className="custom-content-head"
      {...restProps}
    >
      {avatar && isValidElement(avatar) ? (
        <Box className="custom-avatar">{avatar}</Box>
      ) : (
        ""
      )}
      <Box
        sx={{
          flex: 1,
        }}
        className="custom-header-content"
      >
        {title && <CustomTitle content={title} />}

        {subTitle && <CustomSubTitle content={subTitle} />}
      </Box>
    </Box>
  );
};

export default React.memo(CustomContentHead);
