import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

const style = defineStyle({
  fontSize: 'xl',
  px: '6',
  h: '16',
  borderRadius: 'md',
});

const TemplateComponent = defineStyleConfig({
  // style object for base or default style
  baseStyle: {},
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

export default TemplateComponent;
