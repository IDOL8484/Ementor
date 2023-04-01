export interface TypographyProps {
  color?: "dark-blue" | "light-gray" | "green" | "white";
  children: React.ReactNode;
  className?: string;
  position?: "center" | "left" | "right";
  size?: "s14" | "s16" | "s14" | "s22" | "header";
  lineHeight?:
    | "lh14"
    | "lh16"
    | "lh18"
    | "lh20"
    | "lh24"
    | "lh28"
    | "lh58"
    | "lh69";
}
