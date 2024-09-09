import {
    ImageProps,
    chakra,
    forwardRef,
} from "@chakra-ui/react"
import dclExplorerImage from "../assets/images/dao-explorers.png"

export const DclExplorerImage = forwardRef<ImageProps, "img">((props, ref) => {
  return <chakra.img src={dclExplorerImage} ref={ref} {...props} />
})