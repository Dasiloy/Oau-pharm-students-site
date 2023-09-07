import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

// heading One ==> 40px/60px
const h1 = defineStyle({
  fontSize: '5axl',
  lineHeight: '6axl',
})

// heading Two ==> 36px/54px
const h2 = defineStyle({
  fontSize: '4cxl',
  lineHeight: '5dxl',
});

// heading Three ==> 32px/48px
const h3 = defineStyle({
  fontSize: '4axl',
  lineHeight: '5bxl',
});

// heading Four ==> 24px/36px
const h4 = defineStyle({
  fontSize: '2bxl',
  lineHeight: '4axl',
});

// heading Five ==> 20px/30px
const h5 = defineStyle({
  fontSize: 'xl',
  lineHeight: '3bxl',
});

// heading Six ==> 18px/24px
const h6 = defineStyle({
  fontSize: 'lg',
  lineHeight: '2bxl',
});


const HeadingComponent = defineStyleConfig({
  // style object for base or default style
  baseStyle: {
    fontWeight: 'bold',
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    // size: 'xl',
    //   variant: 'solid',
    colorScheme: '',
  },
});

export default HeadingComponent;
