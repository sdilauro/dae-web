import {
    ImageProps,
    chakra,
    forwardRef,
} from "@chakra-ui/react"
import godotIcon from "../assets/images/godot-icon.png"


export const GodotIcon
  = forwardRef<ImageProps, "img">((props, ref) => {
  return <chakra.img src={godotIcon} ref={ref} {...props} />
})