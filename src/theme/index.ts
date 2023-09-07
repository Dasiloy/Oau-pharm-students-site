import { extendTheme } from "@chakra-ui/react";

// ALL FOUNDATION OVERRIDES GOES HERE
import radii from "./foundations/radii"; // global border radii overrides
import styles from "./styles"; // global styles overrides
import fonts from "./foundations/fonts"; // global font family overrides
import space from "./foundations/space"; // global spacing overrides
import sizes from "./foundations/sizes"; // global sizes overrides
import colors from "./foundations/colors"; // global colors overrides
import shadows from "./foundations/shadows"; // global shadows overrides
import fontSizes from "./foundations/font-sizes"; // global font-sizes overrides
import fontWeights from "./foundations/font-weights"; // global font-weights overrides
import lineHeights from "./foundations/line-heights"; // global line-heights overrides
import letterSpacings from "./foundations/letter-spacing"; // global letter-spacing overrides
import breakpoints from "./foundations/breakpoints"; // breakpoints overrides
import zIndices from "./foundations/z-index"; // global z-indices overrides

// ALL COMPONENTS GOES HERE
import ButtonComponent from "./components/buttons"; // style overrides for buttons component
import BadgeComponent from "./components/badge"; // style overrides for badge component
import LinkComponent from "./components/link"; // style overrides for link component
import HeadingComponent from "./components/heading"; // style overrides for heading component
import TextComponent from "./components/text"; // style overrides for text component
import PinInputComponent from "./components/pin-input"; // style overrides for pin input

const theme = extendTheme({
  styles,
  colors,
  fonts,
  shadows,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  space,
  sizes,
  zIndices,
  radii,
  breakpoints,
  components: {
    Button: ButtonComponent,
    Badge: BadgeComponent,
    Link: LinkComponent,
    Heading: HeadingComponent,
    Text: TextComponent,
    PinInput: PinInputComponent,
  },
});

export default theme;
