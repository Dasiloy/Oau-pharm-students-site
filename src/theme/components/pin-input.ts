import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

const style = defineStyle({
  border: '1px',
  borderColor: 'primary.300',
  _hover: {
    borderColor: 'primary.500',
  },
});

const PinInputComponent = defineStyleConfig({
  // style object for base or default style
  baseStyle: {
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
    variants: {
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    // size: 'xl',
    //   variant: 'solid',
    colorScheme: 'primary',
  },
});

export default PinInputComponent;
