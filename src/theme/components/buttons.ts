import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const xs = defineStyle({
  fontSize: "xs",
  px: "2",
  h: "4",
  borderRadius: "0",
});

// small button with and without icons
const sm = defineStyle({
  fontSize: "sm",
  px: "4",
  h: "8",
  borderRadius: "10px",
});

// medium buttons with or without icons
const md = defineStyle({
  fontSize: "sm",
  px: "8",
  h: "12",
  borderRadius: "10px",
});

// large size buttons
const lg = defineStyle({
  fontSize: "md",
  px: "12",
  h: "16",
  borderRadius: "10px",
});

const xl = defineStyle({
  fontSize: "md",
  px: "16",
  h: "20",
  borderRadius: "10px",
});

const ButtonComponent = defineStyleConfig({
  // style object for base or default style
  baseStyle: {
    fontWeight: "semibold",
    _hover: {
      boxShadow: "none",
    },
  },
  // styles for different sizes ("sm","md", "lg")
  sizes: {
    xs,
    sm,
    md,
    lg,
    xl,
  },
  // styles for different visual variants ("outline", "primary", "secondary",text)
  variants: {},
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: "lg",
    variant: "solid" as any,
    colorScheme: "secondary",
  },
});

export default ButtonComponent;
