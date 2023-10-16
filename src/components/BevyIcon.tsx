import {
    ImageProps,
    chakra,
    forwardRef,
} from "@chakra-ui/react"
import bevyIcon from "../assets/images/bevy-icon.png"


export const BevyIcon
  = forwardRef<ImageProps, "img">((props, ref) => {
  return <chakra.img src={bevyIcon} ref={ref} {...props} />
})