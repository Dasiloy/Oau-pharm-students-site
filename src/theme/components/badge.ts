import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const md = defineStyle({
  width: '65px',
  height: '25px',
});

const BadgeComponent = defineStyleConfig({
  // style object for base or default style
  baseStyle: {
    textTransform: 'capitalize',
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    md,
  },
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    // size: 'xl',
    //   variant: 'solid',
    // colorScheme: '',
  },
});

export default BadgeComponent;
