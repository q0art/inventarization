import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";

type Query = "up" | "only" | "down" | "between";

export const useResponsive = (
  query: Query,
  start?: Breakpoint,
  end?: Breakpoint,
) => {
  const { breakpoints } = useTheme();

  const mediaQueryUp = useMediaQuery(breakpoints.up(start as Breakpoint));
  const mediaQueryOnly = useMediaQuery(breakpoints.only(start as Breakpoint));
  const mediaQueryDown = useMediaQuery(breakpoints.down(start as Breakpoint));
  const mediaQueryBetween = useMediaQuery(
    breakpoints.between(start as Breakpoint, end as Breakpoint),
  );

  if (query === "up") return mediaQueryUp;
  if (query === "only") return mediaQueryOnly;
  if (query === "down") return mediaQueryDown;
  if (query === "between") return mediaQueryBetween;
};
