import { Box, Drawer, Stack } from "@mui/material";
import { useDispatch, useSidebar } from "@shared/hooks/use-redux";
import { FC } from "react";

import { closeSidebar } from "../lib/sidebar-slice";

export const Sidebar: FC = () => {
  const open = useSidebar();
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(closeSidebar());
  };

  return (
    <Box>
      <Drawer open={open} onClose={onClose}>
        <Stack>1</Stack>
        <Stack>2</Stack>
        <Stack>3</Stack>
      </Drawer>
    </Box>
  );
};
