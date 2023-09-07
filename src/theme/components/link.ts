import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const style = defineStyle({});

const LinkComponent = defineStyleConfig({
  // style object for base or default style
  baseStyle: {
    decoration: 'none',
    _hover: {
      textDecoration: 'none',
    },
    _focus: {
      boxShadow: 'none',
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    // size: 'xl',
    //   variant: 'solid',
    // colorScheme: '',
  },
});

export default LinkComponent;
