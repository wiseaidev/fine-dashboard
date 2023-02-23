import React, { FC } from "react";

import { Avatar } from "@pankod/refine-mui";

interface AvatarProps {
  src: string;
  alt: string;
  color: string;
  phCharLength: any;
  children?: any;
  [x: string]: any;
}

const CustomAvatar: FC<AvatarProps> = React.forwardRef(
  (
    { src, alt, className, color, size, phCharLength, children, ...rest },
    ref: any
  ): JSX.Element => {
    const placeHolderChar =
      alt && phCharLength > 0 ? alt.slice(0, phCharLength).toUpperCase() : null;

    return (
      <Avatar ref={ref} src={src} alt={alt} {...rest}>
        {!src && !children && alt ? placeHolderChar : children}
      </Avatar>
    );
  }
);

export default CustomAvatar;
