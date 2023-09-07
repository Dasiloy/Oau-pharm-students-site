import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

// caption ==> 12px/18px
const caption = defineStyle({
  fontSize: 'xs',
  lineHeight: 'lg',
});

// subBody ==> 14px/20px
const subBody = defineStyle({
  fontSize: 'sm',
  lineHeight: 'xl',
});

// body ==> 16px/28px
const body = defineStyle({
  fontSize: 'md',
  lineHeight: '3axl',
});

// overline  ==> 22px/34px
const overline = defineStyle({
  fontSize: '2axl',
  lineHeight: '4bxl',
});

const TextComponent = defineStyleConfig({
  // style object for base or default style
  baseStyle: {
    fontWeight: 'normal',
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    caption,
    subBody,
    body,
    overline,
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    // size: 'xl',
    //   variant: 'solid',
    // colorScheme: '',
  },
});

export default TextComponent;
