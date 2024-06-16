import { Box, BoxProps } from "@mui/material";
import { FC } from "react";

interface Props extends BoxProps {}

export const Main: FC<Props> = ({ children, ...props }) => {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexGrow: 1,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
