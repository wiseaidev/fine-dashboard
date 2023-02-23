/**
 * A helper method to build a custom overlay style.
 *
 * @param backgroundColor - A string or an array of colors for the background.
 * @param backgroundImage - An image url.
 * @param gradientDirection - the direction of the gradient color.
 * @returns {any} - A background style object.
 */
const getBackgroundStyle = (
  backgroundColor: string[] | string,
  backgroundImage: string,
  gradientDirection: string
): any => {
  if (backgroundImage)
    return {
      backgroundImage: `url(${backgroundImage})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: `center center`,
      backgroundSize: "cover",
    };

  if (
    typeof backgroundColor === "string" ||
    (Array.isArray(backgroundColor) && backgroundColor.length === 1)
  ) {
    return { backgroundColor: backgroundColor.toString() };
  }

  if (Array.isArray(backgroundColor) && backgroundColor.length > 1) {
    const [firstColor] = backgroundColor[0].split(" ");
    return {
      backgroundColor: firstColor,
      backgroundImage: gradientDirection
        ? `linear-gradient(${gradientDirection}, ${backgroundColor.join(", ")})`
        : `linear-gradient(${backgroundColor.join(", ")})`,
    };
  }
  return null;
};

/**
 * A helper method to build a custom overlay style.
 *
 * @param colors - A string color or an array of colors.
 * @param opacity - The color opacity.
 * @param direction - The direction angle of the linear gradient.
 * @returns { any } - An overlay style.
 */
const getOverLayStyle = (
  colors: string[] | string,
  opacity: number,
  direction: string
): any => {
  if (colors) {
    if (
      typeof colors === "string" ||
      (Array.isArray(colors) && colors.length === 1)
    ) {
      return {
        backgroundColor: colors.toString(),
        opacity: opacity,
      };
    } else if (Array.isArray(colors) && colors.length > 1) {
      const [firstColor] = colors[0].split(" ");
      return {
        backgroundColor: firstColor,
        backgroundImage: direction
          ? `linear-gradient(${direction}, ${colors.join(", ")})`
          : `linear-gradient(${colors.join(", ")})`,
        opacity: opacity,
      };
    }
  }
  return null;
};

/**
 * A helper method to build a custom overlay style.
 *
 * @param colors - A string color or an array of colors.
 * @param opacity - The color opacity.
 * @param direction - The direction angle of the linear gradient.
 * @returns { any } - An overlay style.
 */
const getSeparatorStyle = (
  color: string,
  borderWidth: number,
  borderStyle: string,
  topBorder = false
): any => {
  if (color) {
    const CustomBorderWidth = borderWidth ? borderWidth : 1;
    const CustomBorderStyle = borderStyle ? borderStyle : "solid";

    if (topBorder) {
      return {
        borderTop: `${CustomBorderWidth}px ${CustomBorderStyle} ${color}`,
      };
    }

    return {
      borderBottom: `${CustomBorderWidth}px ${CustomBorderStyle} ${color}`,
    };
  }

  return null;
};

export { getBackgroundStyle, getOverLayStyle, getSeparatorStyle };
