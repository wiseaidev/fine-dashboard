import {
  FC,
  Key,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { Menu, MenuItem, Box } from "@pankod/refine-mui";

interface CustomSideBarProps {
  Component: { type: any; props: any };
  items: any;
  onItemClick: any;
}

const CustomMenu: FC<CustomSideBarProps> = ({
  Component,
  items,
  onItemClick,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuItems, setMenuItems] = useState([] as any);
  const open = Boolean(anchorEl);

  useEffect(() => {
    setMenuItems(items);
  }, [items]);

  const openMenu = (event: {
    stopPropagation: () => void;
    currentTarget: SetStateAction<null>;
  }) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (
    item: { onClick: (arg0: any) => any },
    selectedIndex: Key,
    event: MouseEvent
  ) => {
    event.stopPropagation();
    let updatedItem = { ...item };

    if (item.onClick && typeof item.onClick === "function") {
      updatedItem = item.onClick(item);
    } else if (onItemClick && typeof onItemClick === "function") {
      updatedItem = onItemClick(item);
    }

    if (updatedItem) {
      let hasChange = false;
      const newMenuItems = menuItems.map(
        (item: { onClick: (arg0: any) => any }, index: number) => {
          if (selectedIndex === index) {
            hasChange = true;
            item = updatedItem;
          }
          return item;
        }
      );

      if (hasChange) setMenuItems(newMenuItems);
    }

    closeMenu();
  };

  return (
    <>
      <Box className="pointer">
        {/* eslint-disable-next-line */}
        <Component.type {...Component.props} onClick={openMenu} />
      </Box>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={closeMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {menuItems.map((item: any, index: Key) => {
          return (
            <MenuItem
              key={index}
              disabled={item.disabled}
              sx={{
                alignItems: "center",
                justifyContent: "left",
              }}
              onClick={(event) =>
                handleMenuItemClick({ ...item }, index, event)
              }
            >
              {item.icon}
              <Box sx={{ ml: 1 }}>{item.label}</Box>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default CustomMenu;
