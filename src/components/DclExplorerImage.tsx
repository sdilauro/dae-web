import {
    ImageProps,
    chakra,
    forwardRef,
} from "@chakra-ui/react"
import dclExplorerImage from "../assets/images/dclexplorer-web-image-1.png"


export const DclExplorerImage = forwardRef<ImageProps, "img">((props, ref) => {
  return <chakra.img src={dclExplorerImage} ref={ref} {...props} />
})