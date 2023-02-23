import { FC, useRef } from "react";
import { Card } from "@pankod/refine-mui";
import { getBackgroundStyle } from "./Utils";

interface ICustomCardProps {
  backgroundColor: string[] | string;
  backgroundImage: string;
  gradientDirection: string;
  colors: string[] | string;
  direction: string;
  className: string;
  children: any;
  [x: string]: any;
}

const CustomCard: FC<ICustomCardProps> = ({
  backgroundColor,
  backgroundImage,
  gradientDirection,
  colors,
  direction,
  className,
  children,
  ...rest
}) => {
  const backgroundStyles = getBackgroundStyle(
    backgroundColor,
    backgroundImage,
    gradientDirection
  );

  const headerRef = useRef<any>(null);

  const handleMouseEnter = () => {
    if (headerRef.current) headerRef.current.onHeaderMouseEntered();
  };

  const handleMouseLeave = () => {
    if (headerRef.current) headerRef.current.onHeaderMouseLeft();
  };

  return (
    // @ts-ignore
    <Card
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={backgroundStyles}
      {...rest}
    >
      {children}
    </Card>
  );
};

export default CustomCard;
