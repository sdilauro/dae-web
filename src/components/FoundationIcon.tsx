import {
    ImageProps,
    chakra,
    forwardRef,
} from "@chakra-ui/react"
import foundationIcon from "../assets/images/foundation-icon.png"


export const FoundationIcon = forwardRef<ImageProps, "img">((props, ref) => {
  return <chakra.img src={foundationIcon} ref={ref} {...props} />
})