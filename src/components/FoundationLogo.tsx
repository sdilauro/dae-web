import {
    ImageProps,
    chakra,
    forwardRef,
} from "@chakra-ui/react"
import foundationlogo from "../assets/images/foundation-icon.png"


export const FoundationLogo = forwardRef<ImageProps, "img">((props, ref) => {
  return <chakra.img src={foundationlogo} ref={ref} {...props} />
})